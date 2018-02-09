import React from "react";
import PropTypes from "prop-types";
import { Selection, Helpers, Collection, Axis, Scale, Domain, Box } from "victory-core";
import { assign, defaults, isEqual, isFunction, pick } from "lodash";

const getScale = (props) => {
  const { scale = {}, dimension = "x" } = props;
  if (scale[dimension]) {
    return scale[dimension];
  }
  const fallbackScale = Scale.getBaseScale(props, dimension);
  const range = Helpers.getRange(props, dimension);
  const domain = Domain.getDomainFromProps(props, dimension) || [0, 1];
  fallbackScale.range(range).domain(domain);
  return fallbackScale;
};

const toRange = (props, domain) => {
  const scale = getScale(props);
  return [scale(Math.min(...domain)), scale(Math.max(...domain))];
};

const toDomain = (props, range) => {
  const scale = getScale(props);
  return [scale.invert(Math.min(...range)), scale.invert(Math.max(...range))];
};

const getFullRange = (props) => {
  const scale = getScale(props);
  return scale.range();
};

const getFullDomain = (props) => {
  const scale = getScale(props);
  return scale.domain();
};

const withinBound = (value, bound) => {
  return value >= Math.min(...bound) && value <= Math.max(...bound);
};

const getActiveHandle = (props, position, range) => {
  const width = props.handleWidth / 2;
  const { dimension } = props;
  const getHandle = (type) => {
    const base = {
      min: dimension === "x" ? Math.min(...range) : Math.max(...range),
      max: dimension === "x" ? Math.max(...range) : Math.min(...range)
    };
    return [base[type] - width, base[type] + width];
  };
  const active = ["min", "max"].reduce((memo, type) => {
    memo[type] = withinBound(position, getHandle(type)) ? type : undefined;
    return memo;
  }, {});
  return active.min && active.max ? "both" : active.min || active.max;
};

const getMinimumDomain = () => {
  return [0, 1 / Number.MAX_SAFE_INTEGER];
};

const getCurrentDomain = (props) => {
  const { currentDomain, cachedBrushDomain, brushDomain } = props;
  if (brushDomain && cachedBrushDomain && !isEqual(brushDomain, cachedBrushDomain)) {
    return brushDomain;
  }
  return currentDomain || brushDomain || getFullDomain(props);
};

const panBox = (props, position) => {
  const { brushDomain, startPosition, currentDomain } = props;
  const range = currentDomain ? toRange(props, currentDomain) : toRange(props, brushDomain);
  const fullRange = getFullRange(props);
  const size = Math.abs(range[1] - range[0]);
  const globalMin = Math.min(...fullRange);
  const globalMax = Math.max(...fullRange);
  const delta = startPosition ? startPosition - position : 0;
  const min = Math.min(...range) - delta;
  const max = Math.max(...range) - delta;
  const constrainedMin = min > globalMax - size ? globalMax - size : Math.max(min, globalMin);
  const constrainedMax = max < globalMin + size ? globalMin + size : Math.min(max, globalMax);
  return [constrainedMin, constrainedMax];
};

export default class VictoryBrushLine extends React.Component {
  static propTypes = {
    allowDrag: PropTypes.bool,
    allowResize: PropTypes.bool,
    brushAreaComponent: PropTypes.element,
    brushAreaStyle: PropTypes.object,
    brushComponent: PropTypes.element,
    brushDimension: PropTypes.oneOf(["x", "y"]),
    brushDomain: PropTypes.array,
    brushStyle: PropTypes.object,
    brushWidth: PropTypes.number,
    className: PropTypes.string,
    dimension: PropTypes.oneOf(["x", "y"]),
    disable: PropTypes.bool,
    events: PropTypes.object,
    groupComponent: PropTypes.element,
    handleComponent: PropTypes.element,
    handleStyle: PropTypes.object,
    handleWidth: PropTypes.number,
    lineComponent: PropTypes.element,
    name: PropTypes.string,
    onBrushDomainChange: PropTypes.func,
    scale: PropTypes.object,
    style: PropTypes.object,
    type: PropTypes.string
  };

  static defaultProps = {
    allowDrag: true,
    allowResize: true,
    brushAreaComponent: <Box/>,
    brushAreaStyle: {
      cursor: "crosshair",
      stroke: "none",
      fill: "black",
      opacity: (d, a) => a ? 0.2 : 0.1 // eslint-disable-line no-magic-numbers
    },
    brushComponent: <Box/>,
    brushStyle: {
      strokeWidth: 2,
      stroke: (d, a) => a ? "black" : "none",
      fill: "black",
      cursor: "move",
      opacity: (d, a) => a ? 0.4 : 0.3 // eslint-disable-line no-magic-numbers
    },
    brushWidth: 10,
    groupComponent: <g/>,
    handleComponent: <Box/>,
    handleStyle: {
      stroke: "none",
      fill: "none"
    },
    handleWidth: 10,
    lineComponent: <Axis/>
  };

  static defaultEvents = function (props) {
    return props.disable ? undefined : [{
      target: props.type,
      eventHandlers: {
        onMouseEnter: (evt, targetProps) => {
          evt.preventDefault();
          const { dimension, allowResize } = targetProps;
          const position = Selection.getSVGEventCoordinates(evt)[dimension];
          const fullDomain = getFullDomain(targetProps);
          const minimumDomain = getMinimumDomain();
          const currentDomain = getCurrentDomain(targetProps) || fullDomain;
          const range = toRange(targetProps, currentDomain);
          const activeHandle = allowResize && getActiveHandle(targetProps, position, range);
          const activeBrushes = {
            brushArea: isEqual(currentDomain, fullDomain) || isEqual(currentDomain, minimumDomain),
            brush: withinBound(position, range) && !isEqual(fullDomain, currentDomain),
            minHandle: activeHandle === "min" || activeHandle === "both",
            maxHandle: activeHandle === "min" || activeHandle === "both"
          };
          return [{
            mutation: () => ({ activeBrushes, currentDomain: targetProps.currentDomain })
          }];
        },
        onMouseDown: (evt, targetProps) => {
          evt.preventDefault();
          const { allowResize, allowDrag, dimension, brushDomain, activeBrushes } = targetProps;

          // Don't trigger events for static brushes
          if (!allowResize && !allowDrag) {
            return [];
          }

          const fullDomain = getFullDomain(targetProps);
          const currentDomain = getCurrentDomain(targetProps);
          const position = Selection.getSVGEventCoordinates(evt)[dimension];
          const range = toRange(targetProps, currentDomain);
          const activeHandle = allowResize && getActiveHandle(targetProps, position, range);
          // If the event occurs in any of the handle regions, start a resize
          if (activeHandle) {
            return [{
              mutation: () => {
                return ({
                  isSelecting: true, activeHandle, currentDomain, cachedBrushDomain: brushDomain,
                  startPosition: position, activeBrushes
                });
              }
            }];
          } else if (withinBound(position, range) && !isEqual(fullDomain, currentDomain)) {
            // if the event occurs within a selected region start a panning event, unless the whole
            // domain is selected
            return [{
              mutation: () => ({
                isPanning: allowDrag, startPosition: position,
                currentDomain, cachedBrushDomain: brushDomain, activeBrushes
              })
            }];
          } else {
            // if the event occurs outside the region, or if the whole domain is selected,
            // start a new selection
            return allowResize ? [{
              mutation: () => ({
                isSelecting: allowResize,
                currentDomain: getMinimumDomain(),
                cachedBrushDomain: brushDomain,
                startPosition: position,
                activeBrushes
              })
            }] : [];
          }
        },
        onMouseMove: (evt, targetProps) => { // eslint-disable-line max-statements, complexity
          const {
            isPanning, isSelecting, allowResize, allowDrag, dimension, onBrushDomainChange,
            cachedBrushDomain
          } = targetProps;
          if (isPanning || isSelecting) {
            evt.preventDefault();
            evt.stopPropagation();
          }
          const position = Selection.getSVGEventCoordinates(evt)[dimension];
          const fullDomain = getFullDomain(targetProps);
          const domain = getCurrentDomain(targetProps) || fullDomain;
          const initialRange = toRange(targetProps, domain);
          const activeHandle = getActiveHandle(targetProps, position, initialRange);
          const activeBrushes = {
            brushArea: isEqual(domain, fullDomain) || isEqual(domain, getMinimumDomain()),
            brush: withinBound(position, initialRange) && !isEqual(fullDomain, domain),
            minHandle: activeHandle === "min" || activeHandle === "both",
            maxHandle: activeHandle === "max" || activeHandle === "both"
          };
          if (!targetProps.isPanning && !targetProps.isSelecting) {
            return [{
              mutation: () => ({
                activeBrushes, currentDomain: targetProps.currentDomain, cachedBrushDomain
              })
            }];
          }
          if (allowDrag && isPanning) {
            const fullRange = getFullRange(targetProps);
            const range = panBox(targetProps, position);
            const currentDomain = toDomain(targetProps, range);
            const startPosition = Math.max(...range) >= Math.max(...fullRange) ||
              Math.min(...range) <= Math.min(...fullRange) ?
              targetProps.startPosition : position;
            const mutatedProps = {
              startPosition, isPanning: true, currentDomain, cachedBrushDomain,
              activeBrushes: { brush: true }
            };

            if (isFunction(onBrushDomainChange)) {
              onBrushDomainChange(currentDomain, defaults({}, mutatedProps, targetProps));
            }
            return [{
              mutation: () => mutatedProps
            }];
          } else if (allowResize && isSelecting) {
            const range = toRange(targetProps, targetProps.currentDomain);
            const oppositeHandle = targetProps.activeHandle === "min" ? "max" : "min";
            const handle = targetProps.activeHandle &&
              getActiveHandle(targetProps, position, range) === "both" ?
                oppositeHandle : targetProps.activeHandle;
            let currentDomain;
            if (!handle) {
              currentDomain = toDomain(targetProps, [targetProps.startPosition, position]);
            } else {
              const rangeMax = dimension === "x" ? Math.max(...range) : Math.min(...range);
              const rangeMin = dimension === "x" ? Math.min(...range) : Math.max(...range);
              const min = handle === "max" ? rangeMin : position;
              const max = handle === "min" ? rangeMax : position;
              currentDomain = toDomain(targetProps, [min, max]);
            }
            const mutatedProps = {
              currentDomain, startPosition: targetProps.startPosition,
              isSelecting, activeHandle: handle, cachedBrushDomain,
              activeBrushes: {
                brush: true, minHandle: activeHandle === "min", maxHandle: activeHandle === "max"
              }
            };
            if (isFunction(onBrushDomainChange)) {
              onBrushDomainChange(currentDomain, defaults({}, mutatedProps, targetProps));
            }
            return [{
              mutation: () => (mutatedProps)
            }];
          }
          return [];
        },
        onMouseUp(evt, targetProps) {
          const {
            onBrushDomainChange, currentDomain, allowResize, activeBrushes, cachedBrushDomain
          } = targetProps;
          // if the mouse hasn't moved since a mouseDown event, select the whole domain region
          const mutatedProps = {
            isPanning: false, isSelecting: false, activeHandle: null, startPosition: null,
            currentDomain, cachedBrushDomain, activeBrushes
          };
          if (allowResize && isFunction(onBrushDomainChange)) {
            onBrushDomainChange(currentDomain, defaults({}, mutatedProps, targetProps));
          }
          return [{
            mutation: () => mutatedProps
          }];
        },
        onMouseLeave(evt, targetProps) {
          const { currentDomain, cachedBrushDomain } = targetProps;
          return [{
            mutation: () => ({
              isPanning: false, isSelecting: false, activeHandle: null, startPosition: null,
              currentDomain, cachedBrushDomain, activeBrushes: {}
            })
          }];
        }
      }
    }];
  };

  getRectDimensions(props, domain) {
    const { dimension, brushWidth } = props;
    domain = domain || getCurrentDomain(props);
    const range = toRange(props, domain);
    const coordinates = dimension === "x" ?
      { y1: props.y1, y2: props.y2, x1: Math.min(...range), x2: Math.max(...range) } :
      { x1: props.x1, x2: props.x2, y1: Math.min(...range), y2: Math.max(...range) };
    const { x1, x2, y1, y2 } = coordinates;
    const offset = {
      x: dimension === "x" ? 0 : brushWidth / 2,
      y: dimension === "y" ? 0 : brushWidth / 2
    };

    const x = Math.min(x1, x2) - offset.x;
    const y = Math.min(y1, y2) - offset.y;
    const width = Math.max(x1, x2) + offset.x - x;
    const height = Math.max(y1, y2) + offset.y - y;
    return { x, y, width, height };
  }

  getHandleDimensions(props) {
    const { dimension, brushWidth, handleWidth, x1, x2, y1, y2 } = props;
    const domain = getCurrentDomain(props);
    const range = toRange(props, domain);
    const defaultX = Math.min(x1, x2) - (brushWidth / 2);
    const defaultY = Math.min(y1, y2) - (brushWidth / 2);
    const x = {
      min: dimension === "x" ? Math.min(...range) - handleWidth / 2 : defaultX,
      max: dimension === "x" ? Math.max(...range) - handleWidth / 2 : defaultX
    };
    const y = {
      min: dimension === "y" ? Math.max(...range) - handleWidth / 2 : defaultY,
      max: dimension === "y" ? Math.min(...range) - handleWidth / 2 : defaultY
    };
    const width = dimension === "x" ? handleWidth : brushWidth;
    const height = dimension === "x" ? brushWidth : handleWidth;

    return {
      min: { x: x.min, y: y.min, width, height },
      max: { x: x.max, y: y.max, width, height }
    };
  }

  renderHandles(props) {
    const {
      handleComponent, handleStyle, dimension, datum = {}, activeBrushes = {},
      brushDomain, currentDomain
    } = props;
    if (!brushDomain && !currentDomain) {
      return null;
    }
    const domain = getCurrentDomain(props);
    const handleDimensions = this.getHandleDimensions(props);
    const cursor = dimension === "x" ? "ew-resize" : "ns-resize";
    const style = assign({ cursor }, handleStyle);
    const minDatum = assign({ handleValue: Collection.getMinValue(domain) }, datum);
    const maxDatum = assign({ handleValue: Collection.getMaxValue(domain) }, datum);
    const minHandleProps = assign({
      key: "min",
      style: Helpers.evaluateStyle(style, minDatum, activeBrushes.minHandle)
    }, handleDimensions.min);
    const maxHandleProps = assign(
      {
        key: "max",
        style: Helpers.evaluateStyle(style, maxDatum, activeBrushes.maxHandle)
      }, handleDimensions.max);
    return [
      React.cloneElement(handleComponent, minHandleProps),
      React.cloneElement(handleComponent, maxHandleProps)
    ];
  }

  renderBrush(props) {
    const {
      brushComponent, brushStyle, activeBrushes = {}, datum = {}, brushDomain, currentDomain
    } = props;
    if (!brushDomain && !currentDomain) {
      return null;
    }
    const rectDimensions = this.getRectDimensions(props);
    const style = Helpers.evaluateStyle(brushStyle, datum, activeBrushes.brush);
    const brushProps = assign({ style }, rectDimensions);
    return React.cloneElement(brushComponent, brushProps);
  }

  renderBrushArea(props) {
    const { brushAreaComponent, brushAreaStyle, activeBrushes = {}, datum = {} } = props;
    const rectDimensions = this.getRectDimensions(props, getFullDomain(props));
    const style = Helpers.evaluateStyle(brushAreaStyle, datum, activeBrushes.brushArea);
    const brushAreaProps = assign({ style }, rectDimensions);
    return React.cloneElement(brushAreaComponent, brushAreaProps);
  }

  renderLine(props) {
    const filteredProps = pick(props, [
      "x1", "x2", "y1", "y2", "datum", "scale", "active", "style"
    ]);
    return React.cloneElement(props.lineComponent, filteredProps);
  }

  render() {
    return (
      <g {...this.props.events}>
        {this.renderLine(this.props)}
        {this.renderBrushArea(this.props)}
        {this.renderBrush(this.props)}
        {this.renderHandles(this.props)}
      </g>
    );
  }
}
