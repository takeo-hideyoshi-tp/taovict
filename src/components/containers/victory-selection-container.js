import PropTypes from "prop-types";
import React from "react";
import { VictoryContainer } from "victory-core";
import SelectionHelpers from "./selection-helpers";

export const selectionContainerMixin = (base) => class VictorySelectionContainer extends base {
  static displayName = "VictorySelectionContainer";
  static propTypes = {
    ...VictoryContainer.propTypes,
    allowSelection: PropTypes.bool,
    disable: PropTypes.bool,
    onSelection: PropTypes.func,
    onSelectionCleared: PropTypes.func,
    selectionComponent: PropTypes.element,
    selectionDimension: PropTypes.oneOf(["x", "y"]),
    selectionStyle: PropTypes.object
  };
  static defaultProps = {
    ...VictoryContainer.defaultProps,
    allowSelection: true,
    selectionComponent: <rect/>,
    selectionStyle: {
      stroke: "transparent",
      fill: "black",
      fillOpacity: 0.1
    }
  };

  static defaultEvents = (props) => {
    return props.disable ? undefined : [{
      target: "parent",
      eventHandlers: {
        onMouseDown: (evt, targetProps) => {
          return SelectionHelpers.onMouseDown(evt, targetProps);
        },
        onTouchStart: (evt, targetProps) => {
          return SelectionHelpers.onMouseDown(evt, targetProps);
        },
        onMouseMove: (evt, targetProps) => {
          return SelectionHelpers.onMouseMove(evt, targetProps);
        },
        onTouchMove: (evt, targetProps) => {
          return SelectionHelpers.onMouseMove(evt, targetProps);
        },
        onMouseUp: (evt, targetProps) => {
          return SelectionHelpers.onMouseUp(evt, targetProps);
        },
        onTouchEnd: (evt, targetProps) => {
          return SelectionHelpers.onMouseUp(evt, targetProps);
        }
      }
    }];
  };

  getRect(props) {
    const { x1, x2, y1, y2, selectionStyle, selectionComponent } = props;
    const width = Math.abs(x2 - x1) || 1;
    const height = Math.abs(y2 - y1) || 1;
    const x = Math.min(x1, x2);
    const y = Math.min(y1, y2);
    return y2 && x2 && x1 && y1 ?
      React.cloneElement(selectionComponent, { x, y, width, height, style: selectionStyle }) : null;
  }

  // Overrides method in VictoryContainer
  getChildren(props) {
    const children = React.Children.toArray(props.children);
    return [...children, this.getRect(props)].map((component, i) => {
      return component ? React.cloneElement(component, { key: i }) : null;
    });
  }
};

export default selectionContainerMixin(VictoryContainer);
