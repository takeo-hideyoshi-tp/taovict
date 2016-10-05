/* eslint-disable max-statements */
import React, { PropTypes } from "react";
import { assign } from "lodash";

export default class ErrorBar extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    index: React.PropTypes.number,
    datum: PropTypes.object,
    events: PropTypes.object,
    scale: PropTypes.object,
    shapeRendering: PropTypes.string,
    style: PropTypes.object,
    x: PropTypes.number,
    y: PropTypes.number,
    errorX: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.array,
      PropTypes.bool
    ]),
    errorY: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.array,
      PropTypes.bool
    ]),
    borderWidth: PropTypes.number,
    groupComponent: PropTypes.element
  };

  static defaultProps = {
    borderWidth: 10
  }

  renderErrorBar(error) {
    const { x, y, borderWidth, groupComponent, events} = this.props;
    const shapeRendering = this.props.shapeRendering || "auto";
    const style = assign({stroke: "black"}, this.props.style);
    return React.cloneElement(groupComponent, {},
      error.errorRight ?
        <line
          key="borderRight"
          {...events}
          style={style}
          x1={error.errorRight}
          x2={error.errorRight}
          y1={y - borderWidth}
          y2={y + borderWidth}
        />
        : null
      ,
      error.errorLeft ?
        <line
          key="borderLeft"
          {...events}
          style={style}
          x1={error.errorLeft}
          x2={error.errorLeft}
          y1={y - borderWidth}
          y2={y + borderWidth}
        />
        : null
      ,
      error.errorBottom ?
        <line
          key="borderBottom"
          {...events}
          style={style}
          x1={x - borderWidth}
          x2={x + borderWidth}
          y1={error.errorBottom}
          y2={error.errorBottom}
        />
        : null
      ,
      error.errorTop ?
        <line
          key="borderTop"
          {...events}
          style={style}
          x1={x - borderWidth}
          x2={x + borderWidth}
          y1={error.errorTop}
          y2={error.errorTop}
        />
        : null
      ,
      error.errorTop ?
        <line
          key="crossTop"
          {...events}
          style={style}
          x1={x}
          x2={x}
          y1={y}
          y2={error.errorTop}
          shapeRendering={shapeRendering}
        />
        : null
      ,
      error.errorBottom ?
        <line
          key="crossBottom"
          {...events}
          style={style}
          x1={x}
          x2={x}
          y1={y}
          y2={error.errorBottom}
          shapeRendering={shapeRendering}
        />
        : null
      ,
      error.errorLeft ?
        <line
          key="crossLeft"
          {...events}
          style={style}
          x1={x}
          x2={error.errorLeft}
          y1={y}
          y2={y}
          shapeRendering={shapeRendering}
        /> : null
      ,
      error.errorRight ?
        <line
          key="crossRight"
          {...events}
          style={style}
          x1={x}
          x2={error.errorRight}
          y1={y}
          y2={y}
          shapeRendering={shapeRendering}
        /> : null
    );
  }

  render() {
    const {
      errorX,
      errorY,
      scale
    } = this.props;
    let rangeX;
    let rangeY;
    let positiveErrorX;
    let negativeErrorX;
    let positiveErrorY;
    let negativeErrorY;
    let errorTop;
    let errorBottom;
    let errorRight;
    let errorLeft;

    if (errorX) {
      rangeX = scale.x.range();
      positiveErrorX = errorX[0];
      negativeErrorX = errorX[1];
      errorRight = positiveErrorX >= rangeX[1] ? rangeX[1] : positiveErrorX;
      errorLeft = negativeErrorX <= rangeX[0] ? rangeX[0] : negativeErrorX;
    }

    if (errorY) {
      rangeY = scale.y.range();
      positiveErrorY = errorY[1];
      negativeErrorY = errorY[0];
      errorTop = positiveErrorY >= rangeY[0] ? rangeY[0] : positiveErrorY;
      errorBottom = negativeErrorY <= rangeY[1] ? rangeY[1] : negativeErrorY;
    }

    return React.cloneElement(
      this.props.groupComponent,
      {},
      this.renderErrorBar({errorTop, errorBottom, errorRight, errorLeft})
    );
  }
}
