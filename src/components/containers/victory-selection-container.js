import React from "react";
import { VictoryContainer } from "victory-core";
import SelectionHelpers from "./selection-helpers";

export default class VictorySelectionContainer extends VictoryContainer {
  static displayName = "VictorySelectionContainer";
  static propTypes = {
    ...VictoryContainer.propTypes,
    selectionStyle: React.PropTypes.object,
    onSelection: React.PropTypes.func,
    onSelectionCleared: React.PropTypes.func,
    dimension: React.PropTypes.oneOf(["x", "y"]),
    standalone: React.PropTypes.bool,
    selectionComponent: React.PropTypes.element
  };
  static defaultProps = {
    ...VictoryContainer.defaultProps,
    selectionStyle: {
      stroke: "transparent",
      fill: "black",
      fillOpacity: 0.1
    },
    selectionComponent: <rect/>
  };

  static defaultEvents = [{
    target: "parent",
    eventHandlers: {
      onMouseDown: (evt, targetProps) => {
        return SelectionHelpers.onMouseDown(evt, targetProps);
      },
      onMouseMove: (evt, targetProps) => {
        const mutations = SelectionHelpers.onMouseMove(evt, targetProps);

        if (mutations.id !== this.mouseMoveMutationId) { // eslint-disable-line
          this.mouseMoveMutationId = mutations.id; // eslint-disable-line
          return mutations.mutations;
        }
      },
      onMouseUp: (evt, targetProps) => {
        return SelectionHelpers.onMouseUp(evt, targetProps);
      }
    }
  }];

  getRect(props) {
    const {x1, x2, y1, y2, selectionStyle, selectionComponent} = props;
    const width = Math.abs(x2 - x1) || 1;
    const height = Math.abs(y2 - y1) || 1;
    const x = Math.min(x1, x2);
    const y = Math.min(y1, y2);
    return y2 && x2 && x1 && y1 ?
      React.cloneElement(selectionComponent, {x, y, width, height, style: selectionStyle}) : null;
  }

  // Overrides method in VictoryContainer
  getChildren(props) {
    const children = React.Children.toArray(props.children);
    return [...children, this.getRect(props)].map((component, i) => {
      return component ? React.cloneElement(component, {key: i}) : null;
    });
  }
}
