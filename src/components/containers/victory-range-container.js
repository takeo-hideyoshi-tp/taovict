import React from "react";
import {
  VictoryContainer, Selection, PropTypes as CustomPropTypes, Domain
} from "victory-core";
import Helpers from "./container-helper-methods";
import { isFunction, isEqual } from "lodash";


export default class VictoryRangeContainer extends VictoryContainer {
  static displayName = "VictoryRangeContainer";
  static propTypes = {
    ...VictoryContainer.propTypes,
    selectionStyle: React.PropTypes.object,
    dimension: React.PropTypes.oneOf(["x", "y"]),
    selectedDomain: React.PropTypes.shape({
      x: React.PropTypes.array,
      y: React.PropTypes.array
    }),
    onDomainChange: React.PropTypes.func,
    handleWidth: React.PropTypes.number
  };
  static defaultProps = {
    ...VictoryContainer.defaultProps,
    selectionStyle: {
      stroke: "black",
      fill: "black",
      fillOpacity: 0.2
    },
    dimension: "x",
    handleWidth: 5
  };

  static defaultEvents = [{
    target: "parent",
    eventHandlers: {
      onMouseDown: (evt, targetProps) => {
        evt.preventDefault();
        const { dimension, scale, selectedDomain } = targetProps;
        const fullDomain = targetProps.fullDomain || Helpers.getOriginalDomain(scale);
        const fullDomainBox = Helpers.getDomainBox(targetProps, fullDomain);
        const domainBox = Helpers.getDomainBox(targetProps, fullDomain, selectedDomain);
        const {x, y} = Selection.getSVGEventCoordinates(evt);
        const {x1, y1, x2, y2} = domainBox;
        if (!selectedDomain || isEqual(selectedDomain, fullDomain)) {
          return [{
            target: "parent",
            mutation: () => {
              return {
                startX: x, startY: y, isSelecting: true, domainBox, fullDomainBox,
                x1: dimension !== "y" ? x : x1,
                y1: dimension !== "x" ? y : y1,
                x2: dimension !== "y" ? x : x2,
                y2: dimension !== "x" ? y : y2
              };
            }
          }];
        }
        const handles = Helpers.getHandles(targetProps, domainBox);
        if (Helpers.withinBounds({x, y}, handles.left)) {
          return [{
            target: "parent",
            mutation: () => {
              return {
                isSelecting: true, negativeSelection: true, fullDomainBox, domainBox,
                x1: dimension !== "y" ? x : x1
              };
            }
          }];
        } else if (Helpers.withinBounds({x, y}, handles.right)) {
          return [{
            target: "parent",
            mutation: () => {
              return {
                isSelecting: true, fullDomainBox, domainBox, x2: dimension !== "y" ? x : x2
              };
            }
          }];
        } else if (Helpers.withinBounds({x, y}, domainBox)) {
          return [{
            target: "parent",
            mutation: () => ({ isPanning: true, startX: x, startY: y, fullDomain, selectedDomain })
          }];
        } else {
          return [{
            target: "parent",
            mutation: () => {
              return {
                startX: x, startY: y, isSelecting: true, domainBox,
                x1: dimension !== "y" ? x : x1,
                y1: dimension !== "x" ? y : y1,
                x2: dimension !== "y" ? x : x2,
                y2: dimension !== "x" ? y : y2
              };
            }
          }];
        }
      },
      onMouseMove: (evt, targetProps) => {
        if (!targetProps.isPanning && !targetProps.isSelecting) {
          return {};
        }
        const {
          dimension, scale, isPanning, isSelecting, startX, startY, fullDomainBox
        } = targetProps;
        const {x, y} = Selection.getSVGEventCoordinates(evt);
        if (isPanning) {
          const delta = {
            x: startX ? startX - x : 0,
            y: startY ? startY - y : 0
          };
          const x1 = dimension !== "y" ? targetProps.x1 - delta.x : targetProps.x1;
          const x2 = dimension !== "y" ? targetProps.x2 - delta.x : targetProps.x2;
          const y1 = dimension !== "x" ? targetProps.y1 - delta.y : targetProps.y1;
          const y2 = dimension !== "x" ? targetProps.y2 - delta.y : targetProps.y2;
          const selectedDomain = Selection.getBounds({x1, y1, x2, y2, scale});

          return [{
            target: "parent",
            mutation: () => {
              return {
                selectedDomain, startX: x, startY: y,
                x1: Math.max(x1, fullDomainBox.x1),
                y1: Math.max(y1, fullDomainBox.y1),
                x2: Math.min(x2, fullDomainBox.x2),
                y2: Math.min(y2, fullDomainBox.y2)
              };
            }
          }];
        } else if (isSelecting) {
          const x2 = dimension !== "y" ? x : targetProps.x2;
          const y2 = dimension !== "x" ? y : targetProps.y2;
          const x1 = dimension !== "y" ? x : targetProps.x1;
          const y1 = dimension !== "x" ? y : targetProps.y1;
          const { negativeSelection } = targetProps;
          const selectedDomain = negativeSelection ?
            Selection.getBounds({x1, y1, x2: targetProps.x2, y2: targetProps.y2, scale}) :
            Selection.getBounds({x2, y2, x1: targetProps.x1, y1: targetProps.y1, scale});
          return [{
            target: "parent",
            mutation: () => {
              return negativeSelection ?
                {
                  x1: Math.max(x1, fullDomainBox.x1),
                  y1: Math.max(y1, fullDomainBox.y1),
                  selectedDomain
                } : {
                  x2: Math.min(x2, fullDomainBox.x2),
                y2: Math.min(y2, fullDomainBox.y2),
                  selectedDomain
                };
            }
          }];
        }
      },
      onMouseUp: (evt, targetProps) => {
        const {x1, y1, x2, y2, fullDomainBox} = targetProps;
        if (x1 === x2 || y1 === y2) {
          return [{
            target: "parent",
            mutation: () => {
              return {
                isPanning: false, isSelecting: false, ...fullDomainBox
              };
            }
          }];
        }
        return [{
          target: "parent",
          mutation: () => ({ isPanning: false, isSelecting: false })
        }];
      },
      onMouseLeave: () => {
        return [{
          target: "parent",
          mutation: () => ({ isPanning: false, isSelecting: false })
        }];
      }
    }
  }];

  getRect(props) {
    const {x1, x2, y1, y2, selectionStyle, selectedDomain} = props;

    const width = Math.abs(x2 - x1) || 1;
    const height = Math.abs(y2 - y1) || 1;
    const x = Math.min(x1, x2);
    const y = Math.min(y1, y2);
    return y2 && x2 && x1 && y1 ?
      <rect x={x} y={y} width={width} height={height} style={selectionStyle}/> : null;
  }
  renderContainer(props, svgProps, style) {
    const { title, desc, children, portalComponent, className } = props;
    return (
      <svg {...svgProps} style={style} className={className}>
        <title id="title">{title}</title>
        <desc id="desc">{desc}</desc>
        {this.getRect(props)}
        {children}
        {React.cloneElement(portalComponent, {ref: this.savePortalRef})}
      </svg>
    );
  }
}
