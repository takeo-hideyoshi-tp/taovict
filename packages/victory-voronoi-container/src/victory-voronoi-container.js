import PropTypes from "prop-types";
import React from "react";
import { defaults, isFunction, pick } from "lodash";
import { VictoryTooltip } from "victory-tooltip";
import { VictoryContainer, Helpers, PropTypes as CustomPropTypes } from "victory-core";
import VoronoiHelpers from "./voronoi-helpers";

export const voronoiContainerMixin = (base) =>
  class VictoryVoronoiContainer extends base {
    static displayName = "VictoryVoronoiContainer";
    static propTypes = {
      ...VictoryContainer.propTypes,
      activateData: PropTypes.bool,
      activateLabels: PropTypes.bool,
      disable: PropTypes.bool,
      labelComponent: PropTypes.element,
      labels: PropTypes.func,
      mouseFollowLabels: PropTypes.bool,
      onActivated: PropTypes.func,
      onDeactivated: PropTypes.func,
      radius: PropTypes.number,
      voronoiBlacklist: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, CustomPropTypes.regExp])
      ),
      voronoiDimension: PropTypes.oneOf(["x", "y"]),
      voronoiPadding: PropTypes.number
    };
    static defaultProps = {
      ...VictoryContainer.defaultProps,
      activateData: true,
      activateLabels: true,
      labelComponent: <VictoryTooltip />,
      voronoiPadding: 5
    };

    static defaultEvents = (props) => {
      return [
        {
          target: "parent",
          eventHandlers: {
            onMouseLeave: (evt, targetProps) => {
              return props.disable ? {} : VoronoiHelpers.onMouseLeave(evt, targetProps);
            },
            onTouchCancel: (evt, targetProps) => {
              return props.disable ? {} : VoronoiHelpers.onMouseLeave(evt, targetProps);
            },
            onMouseMove: (evt, targetProps) => {
              return props.disable ? {} : VoronoiHelpers.onMouseMove(evt, targetProps);
            },
            onTouchMove: (evt, targetProps) => {
              return props.disable ? {} : VoronoiHelpers.onMouseMove(evt, targetProps);
            }
          }
        },
        {
          target: "data",
          eventHandlers: props.disable
            ? {}
            : {
                onMouseOver: () => null,
                onMouseOut: () => null,
                onMouseMove: () => null
              }
        }
      ];
    };

    getDimension(props) {
      const { horizontal, voronoiDimension } = props;
      if (!horizontal || !voronoiDimension) {
        return voronoiDimension;
      }
      return voronoiDimension === "x" ? "y" : "x";
    }

    getPoint(point) {
      const whitelist = ["_x", "_x1", "_x0", "_y", "_y1", "_y0"];
      return pick(point, whitelist);
    }

    getLabelPosition(props, points) {
      const { mousePosition, mouseFollowLabels } = props;
      const voronoiDimension = this.getDimension(props);
      const point = this.getPoint(points[0]);
      const basePosition = Helpers.scalePoint(props, point);
      if (!voronoiDimension || points.length < 2) {
        const center = mouseFollowLabels ? mousePosition : undefined;
        return { ...basePosition, center };
      }

      const x = voronoiDimension === "y" ? mousePosition.x : basePosition.x;
      const y = voronoiDimension === "x" ? mousePosition.y : basePosition.y;

      return { x, y, center: mousePosition };
    }

    getStyle(props, points, type) {
      const { labels, labelComponent, theme } = props;
      const componentProps = labelComponent.props || {};
      const themeStyles = theme && theme.voronoi && theme.voronoi.style ? theme.voronoi.style : {};
      const componentStyleArray =
        type === "flyout" ? componentProps.flyoutStyle : componentProps.style;
      return points.reduce((memo, datum, index) => {
        const labelProps = defaults({}, componentProps, { datum, active: true });
        const text = isFunction(labels) ? labels(labelProps) : undefined;
        const textArray = text !== undefined ? `${text}`.split("\n") : [];
        const baseStyle = (datum.style && datum.style[type]) || {};
        const componentStyle = Array.isArray(componentStyleArray)
          ? componentStyleArray[index]
          : componentStyleArray;
        const style = Helpers.evaluateStyle(
          defaults({}, componentStyle, baseStyle, themeStyles[type]),
          labelProps
        );
        const styleArray = textArray.length ? textArray.map(() => style) : [style];
        memo = memo.concat(styleArray);
        return memo;
      }, []);
    }

    getDefaultLabelProps(props, points) {
      const { voronoiDimension, horizontal, mouseFollowLabels, width, height } = props;
      const point = this.getPoint(points[0]);
      const multiPoint = voronoiDimension && points.length > 1;
      const y = point._y1 !== undefined ? point._y1 : point._y;
      const defaultHorizontalOrientation = y < 0 ? "left" : "right";
      const defaultOrientation = y < 0 ? "bottom" : "top";
      const labelOrientation = horizontal ? defaultHorizontalOrientation : defaultOrientation;
      const orientation = mouseFollowLabels ? undefined : labelOrientation;
      return {
        orientation,
        pointerLength: multiPoint ? 0 : undefined,
        constrainToVisibleArea: multiPoint || mouseFollowLabels ? true : undefined,
        width,
        height
      };
    }

    getLabelProps(props, points) {
      const { labels, scale, labelComponent, theme, width, height } = props;
      const componentProps = labelComponent.props || {};
      const text = points.reduce((memo, datum) => {
        const labelProps = defaults({}, componentProps, { datum, active: true });
        const t = isFunction(labels) ? labels(labelProps) : null;
        if (t === null || t === undefined) {
          return memo;
        }
        memo = memo.concat(`${t}`.split("\n"));
        return memo;
      }, []);

      // remove properties from first point to make datum
      // eslint-disable-next-line no-unused-vars
      const { childName, eventKey, style, continuous, ...datum } = points[0];
      const name = props.name === childName ? childName : `${props.name}-${childName}`;
      const labelProps = defaults(
        {
          key: `${name}-${eventKey}-voronoi-tooltip`,
          id: `${name}-${eventKey}-voronoi-tooltip`,
          active: true,
          flyoutStyle: this.getStyle(props, points, "flyout")[0],
          renderInPortal: false,
          style: this.getStyle(props, points, "labels"),
          datum,
          scale,
          theme,
          text,
          width,
          height
        },
        componentProps,
        this.getDefaultLabelProps(props, points)
      );
      const labelPosition = this.getLabelPosition(props, points);
      return defaults({}, labelPosition, labelProps);
    }

    getTooltip(props) {
      const { labels, activePoints, labelComponent } = props;
      if (!labels) {
        return null;
      }
      if (Array.isArray(activePoints) && activePoints.length) {
        return React.cloneElement(labelComponent, this.getLabelProps(props, activePoints));
      } else {
        return null;
      }
    }

    // Overrides method in VictoryContainer
    getChildren(props) {
      return [...React.Children.toArray(props.children), this.getTooltip(props)];
    }
  };

export default voronoiContainerMixin(VictoryContainer);
