/*eslint no-magic-numbers: ["error", { "ignore": [0.5, 2] }]*/
import React from "react";
import PropTypes from "prop-types";
import { Helpers, CommonProps, Rect, Line } from "victory-core";
import { assign, defaults } from "lodash";

export default class Candle extends React.Component {
  static propTypes = {
    ...CommonProps.primitiveProps,
    candleHeight: PropTypes.number,
    close: PropTypes.number,
    datum: PropTypes.object,
    groupComponent: PropTypes.element,
    high: PropTypes.number,
    lineComponent: PropTypes.element,
    low: PropTypes.number,
    open: PropTypes.number,
    padding: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object
    ]),
    rectComponent: PropTypes.element,
    wickStrokeWidth: PropTypes.number,
    width: PropTypes.number,
    x: PropTypes.number
  }

  static defaultProps = {
    groupComponent: <g/>,
    lineComponent: <Line/>,
    rectComponent: <Rect/>
  };

  render() {
    const {
      x, high, low, open, close, data, datum, active, width, candleHeight, events, groupComponent,
      rectComponent, lineComponent, role, shapeRendering, className, wickStrokeWidth, transform,
      clipPath, id
    } = this.props;
    const style = Helpers.evaluateStyle(
      assign({ stroke: "black" }, this.props.style), datum, active
    );
    const wickStyle = defaults({ strokeWidth: wickStrokeWidth }, style);
    const padding = this.props.padding.left || this.props.padding;
    const candleWidth = style.width || 0.5 * (width - 2 * padding) / data.length;
    const candleX = x - candleWidth / 2;
    const sharedProps = { role, shapeRendering, className, events, transform, clipPath };

    const candleProps = assign({
      key: `${id}-candle`,
      style,
      x: candleX,
      y: Math.min(open, close),
      width: candleWidth,
      height: candleHeight
    }, sharedProps);

    const highWickProps = assign({
      key: `${id}-highWick`,
      style: wickStyle,
      x1: x,
      x2: x,
      y1: high,
      y2: Math.min(open, close)
    }, sharedProps);

    const lowWickProps = assign({
      key: `${id}-lowWick`,
      style: wickStyle,
      x1: x,
      x2: x,
      y1: Math.max(open, close),
      y2: low
    }, sharedProps);

    return React.cloneElement(groupComponent, {}, [
      React.cloneElement(rectComponent, candleProps),
      React.cloneElement(lineComponent, highWickProps),
      React.cloneElement(lineComponent, lowWickProps)
    ]);
  }
}
