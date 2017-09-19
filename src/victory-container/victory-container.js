import React from "react";
import PropTypes from "prop-types";
import { assign, omit, defaults, uniqueId, isObject } from "lodash";
import Portal from "../victory-portal/portal";
import Timer from "../victory-util/timer";

export default class VictoryContainer extends React.Component {
  static displayName = "VictoryContainer";
  static role = "container";
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    className: PropTypes.string,
    containerId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    desc: PropTypes.string,
    events: PropTypes.object,
    height: PropTypes.number,
    origin: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
    polar: PropTypes.bool,
    portalComponent: PropTypes.element,
    responsive: PropTypes.bool,
    style: PropTypes.object,
    theme: PropTypes.object,
    title: PropTypes.string,
    width: PropTypes.number
  }

  static defaultProps = {
    portalComponent: <Portal/>,
    responsive: true
  }

  static contextTypes = {
    getTimer: PropTypes.func
  }

  static childContextTypes = {
    portalUpdate: PropTypes.func,
    portalRegister: PropTypes.func,
    portalDeregister: PropTypes.func,
    getTimer: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.getTimer = this.getTimer.bind(this);
    this.containerId = !isObject(props) || typeof props.containerId === "undefined" ?
      uniqueId("victory-container-") : props.containerId;
  }

  getChildContext() {
    return {
      portalUpdate: this.portalUpdate,
      portalRegister: this.portalRegister,
      portalDeregister: this.portalDeregister,
      getTimer: this.getTimer
    };
  }

  componentWillMount() {
    this.savePortalRef = (portal) => {
      this.portalRef = portal;
      return portal;
    };
    this.portalUpdate = (key, el) => this.portalRef.portalUpdate(key, el);
    this.portalRegister = () => this.portalRef.portalRegister();
    this.portalDeregister = (key) => this.portalRef.portalDeregister(key);
  }

  componentWillUnmount() {
    if (!this.context.getTimer) {
      this.getTimer().stop();
    }
  }

  getTimer() {
    if (this.context.getTimer) {
      return this.context.getTimer();
    }
    if (!this.timer) {
      this.timer = new Timer();
    }
    return this.timer;
  }

  getIdForElement(elementName) {
    return `${this.containerId}-${elementName}`;
  }

  // overridden in custom containers
  getChildren(props) {
    return props.children;
  }

  renderContainer(props, svgProps, style) {
    const { title, desc, portalComponent, className, width, height } = props;
    const children = this.getChildren(props);
    const divStyle = { pointerEvents: "none", touchAction: "none" };
    const svgStyle = { width: "100%", height: "100%" };
    //eslint-disable-next-line no-magic-numbers
    const marginTop = `-${Math.round(100 * height / width)}%`;
    return (
      <div style={defaults({}, style, divStyle)} className={className}>
        <svg {...svgProps} style={{ ...svgStyle, pointerEvents: "all" }}>
          {title ? <title id={this.getIdForElement("title")}>{title}</title> : null}
          {desc ? <desc id={this.getIdForElement("desc")}>{desc}</desc> : null}
          {children}
        </svg>
          <div style={{ ...divStyle, zIndex: 1, position: "relative", marginTop }}>
            <svg {...svgProps} style={{ ...svgStyle, overflow: "visible" }}>
              {React.cloneElement(portalComponent, { ref: this.savePortalRef })}
            </svg>
          </div>
        </div>
    );
  }

  render() {
    const { width, height, responsive, events } = this.props;
    const style = responsive ? this.props.style : omit(this.props.style, ["height", "width"]);
    const svgProps = assign(
      {
        width, height, role: "img",
        "aria-labelledby": `${this.getIdForElement("title")} ${this.getIdForElement("desc")}`,
        viewBox: responsive ? `0 0 ${width} ${height}` : undefined
      },
      events
    );
    return this.renderContainer(this.props, svgProps, style);
  }
}
