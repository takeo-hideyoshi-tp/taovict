/*eslint no-magic-numbers: ["error", { "ignore": [0.5, 2] }]*/
import React from "react";
import PropTypes from "prop-types";
import Helpers from "../victory-util/helpers";
import Collection from "../victory-util/collection";
import { assign, defaults } from "lodash";
import CommonProps from "./common-props";

export default class Candle extends React.Component {
  static propTypes = {
    ...CommonProps,
    candleHeight: PropTypes.number,
    close: PropTypes.number,
    datum: PropTypes.object,
    groupComponent: PropTypes.element,
    high: PropTypes.number,
    low: PropTypes.number,
    open: PropTypes.number,
    padding: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object
    ]),
    wickStrokeWidth: PropTypes.number,
    width: PropTypes.number,
    x: PropTypes.number
  }

  static defaultProps = {
    groupComponent: <g/>
  };

  componentWillMount() {
    const { style, candleWidth } = this.calculateAttributes(this.props);
    this.style = style;
    this.candleWidth = candleWidth;
  }

  shouldComponentUpdate(nextProps) {
    const { className, candleHeight, datum, x, high, low, open, close } = this.props;
    const { style, candleWidth } = this.calculateAttributes(nextProps);

    if (!Collection.allSetsEqual([
      [className, nextProps.className],
      [candleHeight, nextProps.candleHeight],
      [x, nextProps.x],
      [high, nextProps.high],
      [low, nextProps.low],
      [open, nextProps.open],
      [close, nextProps.close],
      [candleWidth, this.candleWidth],
      [style, this.style],
      [datum, nextProps.datum]
    ])) {
      this.style = style;
      this.candleWidth = candleWidth;
      return true;
    }
    return false;
  }

  calculateAttributes(props) {
    const { data, datum, active, width } = props;
    const style = Helpers.evaluateStyle(assign({ stroke: "black" }, props.style), datum, active);
    const padding = props.padding.left || props.padding;
    const candleWidth = style.width || 0.5 * (width - 2 * padding) / data.length;
    return { style, candleWidth };
  }

  // Overridden in victory-core-native
  renderWick(wickProps) {
    return <line {...wickProps}/>;
  }

  // Overridden in victory-core-native
  renderCandle(candleProps) {
    return <rect {...candleProps}/>;
  }

  getCandleProps(props) {
    const { candleHeight, x, open, close, events, role, className } = props;
    const shapeRendering = props.shapeRendering || "auto";
    const candleX = x - this.candleWidth / 2;
    return assign({
      x: candleX,
      y: Math.min(open, close),
      style: this.style,
      role,
      width: this.candleWidth,
      height: candleHeight,
      shapeRendering,
      className
    }, events);
  }

  getWickProps(props, wickType) {
    const { x, high, low, open, close, wickStrokeWidth, events, className } = props;
    const shapeRendering = props.shapeRendering || "auto";
    const role = props.role || "presentation";
    const lowWick = Math.min(close, open);
    const highWick = Math.max(close, open);
    const wickStyle = defaults({}, this.style, { strokeWidth: wickStrokeWidth });
    return assign({
      x1: x,
      x2: x,
      y1: wickType === "low" ? lowWick : highWick,
      y2: wickType === "high" ? low : high,
      style: wickStyle,
      role,
      shapeRendering,
      className
    }, events);
  }

  render() {
    const candleProps = this.getCandleProps(this.props);
    const highWickProps = this.getWickProps(this.props, "high");
    const lowWickProps = this.getWickProps(this.props, "low");
    return React.cloneElement(
      this.props.groupComponent,
      {},
      this.renderWick(highWickProps),
      this.renderWick(lowWickProps),
      this.renderCandle(candleProps)
    );
  }
}
