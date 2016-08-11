import React, { PropTypes } from "react";
import BarHelpers from "./helper-methods";

export default class Bar extends React.Component {

  static propTypes = {
    clipId: PropTypes.number,
    datum: PropTypes.object,
    events: PropTypes.object,
    horizontal: PropTypes.bool,
    index: PropTypes.number,
    role: PropTypes.string,
    scale: PropTypes.object,
    style: PropTypes.object,
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    y0: React.PropTypes.number,
    width: PropTypes.number,
    padding: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object
    ]),
    data: PropTypes.array
  };

  getVerticalBarPath(props, width) {
    const {x, y0, y} = props;
    const size = width / 2;
    return `M ${x - size}, ${y0}
      L ${x - size}, ${y}
      L ${x + size}, ${y}
      L ${x + size}, ${y0}
      L ${x - size}, ${y0}`;
  }

  getHorizontalBarPath(props, width) {
    const {x, y0, y} = props;
    const size = width / 2;
    return `M ${y0}, ${x - size}
      L ${y0}, ${x + size}
      L ${y}, ${x + size}
      L ${y}, ${x - size}
      L ${y0}, ${x - size}`;
  }

  getBarPath(props, width) {
    return this.props.horizontal ?
      this.getHorizontalBarPath(props, width) : this.getVerticalBarPath(props, width);
  }

  renderBar(path, style, events) {
    const { role, clipId } = this.props;
    return (
      <path
        d={path}
        style={style}
        role={role}
        shapeRendering="optimizeSpeed"
        {...events}
        clipPath={`url(#${clipId})`}
      />
    );
  }

  render() {
    // TODO better bar width calculation
    const { events, style} = this.props;
    const barWidth = BarHelpers.getBarWidth(this.props);
    const path = typeof this.props.x === "number" ?
      this.getBarPath(this.props, barWidth) : undefined;
    return this.renderBar(path, style, events);
  }
}
