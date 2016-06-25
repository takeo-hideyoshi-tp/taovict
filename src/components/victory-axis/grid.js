import React, { PropTypes } from "react";

export default class GridLine extends React.Component {
  static propTypes = {
    tick: PropTypes.any,
    x1: PropTypes.number,
    y1: PropTypes.number,
    x2: PropTypes.number,
    y2: PropTypes.number,
    style: PropTypes.object,
    events: PropTypes.object
  };

  renderGridLine(props, style, events) {
    return <line {...props} style={style} {...events} vectorEffect="non-scaling-stroke"/>;
  }

  render() {
    const { x1, x2, y1, y2, style, events} = this.props;
    return this.renderGridLine({x1, x2, y1, y2}, style, events);
  }
}
