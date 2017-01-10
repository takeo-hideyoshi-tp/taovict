import React, { PropTypes } from "react";
import Helpers from "../victory-util/helpers";
import { assign, isEqual } from "lodash";
import * as d3Shape from "d3-shape";

export default class Curve extends React.Component {
  static propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    data: PropTypes.array,
    events: PropTypes.object,
    index: PropTypes.number,
    interpolation: PropTypes.string,
    role: PropTypes.string,
    scale: PropTypes.object,
    shapeRendering: PropTypes.string,
    style: PropTypes.object
  };

  componentWillMount() {
    const {style, path} = this.calculateAttributes(this.props);
    this.style = style;
    this.path = path;
  }

  shouldComponentUpdate(nextProps) {
    const {style, path} = this.calculateAttributes(nextProps);
    if (path !== this.path || !isEqual(style, this.style)) {
      this.style = style;
      this.path = path;
      return true;
    }
    return false;
  }

  calculateAttributes(props) {
    const {style, data, active, scale, interpolation} = props;
    const xScale = scale.x;
    const yScale = scale.y;
    const lineFunction = d3Shape.line()
      .curve(d3Shape[this.toNewName(interpolation)])
      .x((d) => xScale(d.x1 || d.x))
      .y((d) => yScale(d.y1 || d.y));
    return {
      style: Helpers.evaluateStyle(
        assign({fill: "none", stroke: "black"}, style), data, active
      ),
      path: lineFunction(data)
    };
  }

  toNewName(interpolation) {
    // d3 shape changed the naming scheme for interpolators from "basis" -> "curveBasis" etc.
    const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);
    return `curve${capitalize(interpolation)}`;
  }

  // Overridden in victory-core-native
  renderLine(path, style, events) {
    const { role, shapeRendering, className } = this.props;
    return (
      <path
        className={className}
        style={style}
        shapeRendering={shapeRendering || "auto"}
        d={path}
        role={role || "presentation"}
        {...events}
        vectorEffect="non-scaling-stroke"
      />
    );
  }

  render() {
    return this.renderLine(this.path, this.style, this.props.events);
  }
}
