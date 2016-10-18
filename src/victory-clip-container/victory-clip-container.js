import React, { PropTypes } from "react";
import { ClipPath } from "../victory-primitives/index";

export default class VictoryClipContainer extends React.Component {
  static displayName = "VictoryClipContainer";

  static propTypes = {
    style: PropTypes.object,
    padding: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
        top: PropTypes.number,
        bottom: PropTypes.number,
        left: PropTypes.number,
        right: PropTypes.number
      })
    ]),
    clipHeight: PropTypes.number,
    clipWidth: PropTypes.number,
    events: PropTypes.object,
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ]),
    clipPathComponent: PropTypes.element,
    translateX: PropTypes.number,
    transform: PropTypes.string
  }

  static defaultProps = {
    clipPathComponent: <ClipPath/>
  }

  renderClippedGroup(props, clipId) {
    const { style, events, transform, children } = props;
    const clipComponent = this.renderClipComponent(props, clipId);
    return (
      <g
        style={style}
        {...events}
        transform={transform}
      >
        {clipComponent}
        <g clipPath={`url(#${clipId})`}>
          {children}
        </g>
      </g>
    );
  }

  renderGroup(props) {
    const { style, events, transform, children } = props;
    return (
      <g
        style={style}
        {...events}
        transform={transform}
      >
        {children}
      </g>
    );
  }

  renderClipComponent(props, clipId) {
    const { padding, translateX, clipHeight, clipWidth, clipPathComponent } = props;
    return React.cloneElement(
      clipPathComponent,
      { padding, clipId, translateX, clipWidth, clipHeight }
    );
  }

  render() {
    const { clipWidth } = this.props;
    if (clipWidth || clipWidth === 0) {
      const clipId = Math.round(Math.random() * 10000);
      return this.renderClippedGroup(this.props, clipId);
    }
    return this.renderGroup(this.props);
  }
}
