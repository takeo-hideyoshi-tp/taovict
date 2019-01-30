import { Selection, Data, Helpers } from "victory-core";
import { assign, throttle, isFunction, isEmpty, groupBy, keys, includes } from "lodash";
import isEqual from "react-fast-compare";
import { voronoi as d3Voronoi } from "d3-voronoi";
import React from "react";

const VoronoiHelpers = {
  withinBounds(props, point) {
    const { width, height, voronoiPadding, polar, origin, scale } = props;
    const padding = voronoiPadding || 0;
    const { x, y } = point;
    if (polar) {
      const distanceSquared = Math.pow(x - origin.x, 2) + Math.pow(y - origin.y, 2);
      const radius = Math.max(...scale.y.range());
      return distanceSquared < Math.pow(radius, 2);
    } else {
      return x >= padding && x <= width - padding && y >= padding && y <= height - padding;
    }
  },

  getDatasets(props) {
    const children = React.Children.toArray(props.children);
    const addMeta = (data, name, child) => {
      const continuous = child && child.type && child.type.continuous;
      const style = child ? child.props && child.props.style : props.style;
      return data.map((datum, index) => {
        const { x, y, y0, x0 } = Helpers.getPoint(datum);
        const voronoiX = (+x + +x0) / 2;
        const voronoiY = (+y + +y0) / 2;
        return assign(
          {
            _voronoiX: props.voronoiDimension === "y" ? 0 : voronoiX,
            _voronoiY: props.voronoiDimension === "x" ? 0 : voronoiY,
            eventKey: index,
            childName: name,
            continuous,
            style
          },
          datum
        );
      });
    };

    if (props.data) {
      return addMeta(props.data);
    }

    const getData = (childProps) => {
      const data = Data.getData(childProps);
      return Array.isArray(data) && data.length > 0 ? data : undefined;
    };

    const iteratee = (child, childName) => {
      const childProps = child.props || {};
      const name = childProps.name || childName;
      const blacklist = props.voronoiBlacklist || [];
      if (!Data.isDataComponent(child) || includes(blacklist, name)) {
        return null;
      }
      const getChildData =
        child.type && isFunction(child.type.getData) ? child.type.getData : getData;
      const childData = getChildData(child.props);
      return childData ? addMeta(childData, name, child) : null;
    };

    return Helpers.reduceChildren(children, iteratee, props);
  },

  // returns an array of objects with point and data where point is an x, y coordinate, and data is
  // an array of points belonging to that coordinate
  mergeDatasets(props, datasets) {
    const points = groupBy(datasets, (datum) => {
      const { x, y } = Helpers.scalePoint(props, datum);
      return `${x},${y}`;
    });
    return keys(points).map((key) => {
      const point = key.split(",");
      return {
        x: +point[0],
        y: +point[1],
        points: points[key]
      };
    });
  },

  getVoronoi(props, mousePosition) {
    const { width, height, voronoiPadding } = props;
    const padding = voronoiPadding || 0;
    const voronoiFunction = d3Voronoi()
      .x((d) => d.x)
      .y((d) => d.y)
      .extent([[padding, padding], [width - padding, height - padding]]);
    const datasets = this.getDatasets(props);
    const voronoi = voronoiFunction(this.mergeDatasets(props, datasets));
    const size = props.voronoiDimension ? undefined : props.radius;
    return voronoi.find(mousePosition.x, mousePosition.y, size);
  },

  getActiveMutations(props, point) {
    const { childName, continuous } = point;
    const { activateData, activateLabels, labels } = props;
    if (!activateData && !activateLabels) {
      return [];
    }
    const defaultTarget = activateData ? ["data"] : [];
    const targets = labels && !activateLabels ? defaultTarget : defaultTarget.concat("labels");
    if (isEmpty(targets)) {
      return [];
    }
    return targets.map((target) => {
      const eventKey = continuous === true && target === "data" ? "all" : point.eventKey;
      return {
        childName,
        eventKey,
        target,
        mutation: () => ({ active: true })
      };
    });
  },

  getInactiveMutations(props, point) {
    const { childName, continuous } = point;
    const { activateData, activateLabels, labels } = props;
    if (!activateData && !activateLabels) {
      return [];
    }
    const defaultTarget = activateData ? ["data"] : [];
    const targets = labels && !activateLabels ? defaultTarget : defaultTarget.concat("labels");
    if (isEmpty(targets)) {
      return [];
    }
    return targets.map((target) => {
      const eventKey = continuous && target === "data" ? "all" : point.eventKey;
      return {
        childName,
        eventKey,
        target,
        mutation: () => null
      };
    });
  },

  getParentMutation(activePoints, mousePosition, parentSVG) {
    return [
      {
        target: "parent",
        eventKey: "parent",
        mutation: () => ({ activePoints, mousePosition, parentSVG })
      }
    ];
  },

  onActivated(props, points) {
    if (isFunction(props.onActivated)) {
      props.onActivated(points, props);
    }
  },

  onDeactivated(props, points) {
    if (isFunction(props.onDeactivated)) {
      props.onDeactivated(points, props);
    }
  },

  onMouseLeave(evt, targetProps) {
    const activePoints = targetProps.activePoints || [];
    this.onDeactivated(targetProps, activePoints);
    const inactiveMutations = activePoints.length
      ? activePoints.map((point) => this.getInactiveMutations(targetProps, point))
      : [];
    return this.getParentMutation([]).concat(...inactiveMutations);
  },

  onMouseMove(evt, targetProps) {
    // eslint-disable-line max-statements
    const activePoints = targetProps.activePoints || [];
    const parentSVG = targetProps.parentSVG || Selection.getParentSVG(evt);
    const mousePosition = Selection.getSVGEventCoordinates(evt, parentSVG);
    if (!this.withinBounds(targetProps, mousePosition)) {
      this.onDeactivated(targetProps, activePoints);
      const inactiveMutations = activePoints.length
        ? activePoints.map((point) => this.getInactiveMutations(targetProps, point))
        : [];
      return this.getParentMutation([], mousePosition, parentSVG).concat(...inactiveMutations);
    }
    const nearestVoronoi = this.getVoronoi(targetProps, mousePosition);
    const points = nearestVoronoi ? nearestVoronoi.data.points : [];
    const parentMutations = this.getParentMutation(points, mousePosition, parentSVG);
    if (activePoints.length && isEqual(points, activePoints)) {
      return parentMutations;
    } else {
      this.onActivated(targetProps, points);
      this.onDeactivated(targetProps, activePoints);
      const activeMutations = points.length
        ? points.map((point) => this.getActiveMutations(targetProps, point))
        : [];
      const inactiveMutations = activePoints.length
        ? activePoints.map((point) => this.getInactiveMutations(targetProps, point))
        : [];
      return parentMutations.concat(...inactiveMutations, ...activeMutations);
    }
  }
};

export default {
  onMouseLeave: VoronoiHelpers.onMouseLeave.bind(VoronoiHelpers),
  onMouseMove: throttle(
    VoronoiHelpers.onMouseMove.bind(VoronoiHelpers),
    32, // eslint-disable-line no-magic-numbers
    { leading: true, trailing: false }
  )
};
