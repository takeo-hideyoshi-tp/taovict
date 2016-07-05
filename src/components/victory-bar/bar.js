import React, { PropTypes } from "react";

export default class Bar extends React.Component {

  static propTypes = {
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

  render() {
    // TODO better bar width calculation
    const width = this.props.width;
    const padding = this.props.padding.left || this.props.padding;
    const dataLength = this.props.data.length;
    const { events, role, style } = this.props;
    const barWidth = style && style.width ||
    0.5 * (width - 2 * padding) / dataLength;
    const path = typeof this.props.x === "number" ?
      this.getBarPath(this.props, barWidth) : undefined;

    return (
      <path
        d={path}
        {...events}
        role={role}
        style={style}
        shapeRendering="optimizeSpeed"
      />
    );
  }
}
