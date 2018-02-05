import PropTypes from "prop-types";
import React from "react";
import { VictoryContainer, VictoryLabel, Axis, Helpers } from "victory-core";
import { defaults, assign, isNumber, isUndefined, isObject } from "lodash";
import CursorHelpers from "./cursor-helpers";

export const cursorContainerMixin = (base) => class VictoryCursorContainer extends base {
  static displayName = "VictoryCursorContainer";
  static propTypes = {
    ...VictoryContainer.propTypes,
    cursorDimension: PropTypes.oneOf(["x", "y"]),
    cursorLabel: PropTypes.func,
    cursorLabelComponent: PropTypes.element,
    cursorLabelOffset: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number
      })
    ]),
    defaultCursorValue: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number
      })
    ]),
    onCursorChange: PropTypes.func
  };
  static defaultProps = {
    ...VictoryContainer.defaultProps,
    cursorLabelComponent: <VictoryLabel/>,
    cursorLabelOffset: {
      x: 5,
      y: -10
    },
    cursorComponent: <Axis/>
  };

  static defaultEvents = [{
    target: "parent",
    eventHandlers: {
      onMouseLeave: () => {
        return [];
      },
      onTouchCancel: () => {
        return [];
      },
      onMouseMove: (evt, targetProps) => {
        return CursorHelpers.onMouseMove(evt, targetProps);
      },
      onTouchMove: function (evt, targetProps) { // eslint-disable-line object-shorthand
        const mutations = CursorHelpers.onMouseMove(evt, targetProps);

        if (mutations.id !== this.mouseMoveMutationId) {
          this.mouseMoveMutationId = mutations.id;
          return mutations.mutations;
        }

        return [];
      }
    }
  }];

  getCursorPosition(props) {
    const { cursorValue, defaultCursorValue, cursorDimension, domain } = props;
    if (cursorValue) { return cursorValue; }

    if (isNumber(defaultCursorValue)) {
      return {
        x: (domain.x[0] + domain.x[1]) / 2,
        y: (domain.y[0] + domain.y[1]) / 2,
        [cursorDimension]: defaultCursorValue
      };
    }

    return defaultCursorValue;
  }

  getCursorLabelOffset(props) {
    const { cursorLabelOffset } = props;

    if (isNumber(cursorLabelOffset)) {
      return {
        x: cursorLabelOffset,
        y: cursorLabelOffset
      };
    }

    return cursorLabelOffset;
  }

  getPadding(props) {
    if (isUndefined(props.padding)) {
      const child = props.children.find((c) => {
        return isObject(c.props) && !isUndefined(c.props.padding);
      });
      return Helpers.getPadding(child.props);
    } else {
      return Helpers.getPadding(props);
    }
  }

  getCursorElements(props) { // eslint-disable-line max-statements
    const {
      scale, cursorDimension, cursorLabelComponent, cursorLabel, cursorComponent, width, height
    } = props;
    const cursorValue = this.getCursorPosition(props);
    const cursorLabelOffset = this.getCursorLabelOffset(props);

    if (!cursorValue) { return []; }

    const newElements = [];
    const padding = this.getPadding(props);
    const cursorCoordinates = {
      x: scale.x(cursorValue.x),
      y: scale.y(cursorValue.y)
    };
    if (cursorLabel) {
      newElements.push(React.cloneElement(
        cursorLabelComponent,
        defaults(
          { active: true },
          cursorLabelComponent.props,
          {
            x: cursorCoordinates.x + cursorLabelOffset.x,
            y: cursorCoordinates.y + cursorLabelOffset.y,
            text: Helpers.evaluateProp(cursorLabel, cursorValue, true),
            active: true,
            key: "cursor-label"
          }
        )
      ));
    }

    const cursorStyle = assign({ stroke: "black" }, cursorComponent.props.style);
    if (cursorDimension === "x" || cursorDimension === undefined) {
      newElements.push(React.cloneElement(cursorComponent, {
        key: "x-cursor",
        x1: cursorCoordinates.x,
        x2: cursorCoordinates.x,
        y1: padding.top,
        y2: (height - padding.bottom),
        style: cursorStyle
      }));
    }
    if (cursorDimension === "y" || cursorDimension === undefined) {
      newElements.push(React.cloneElement(cursorComponent, {
        key: "y-cursor",
        x1: padding.left,
        x2: (width - padding.right),
        y1: cursorCoordinates.y,
        y2: cursorCoordinates.y,
        style: cursorStyle
      }));
    }
    return newElements;
  }

  // Overrides method in VictoryContainer
  getChildren(props) {
    return [
      ...React.Children.toArray(props.children),
      ...this.getCursorElements(props)
    ];
  }
};

export default cursorContainerMixin(VictoryContainer);
