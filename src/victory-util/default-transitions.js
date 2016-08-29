/* eslint-disable func-style */
import { filter, max, min, sum } from "lodash";
import Log from "./log";

export function continuousTransitions() {
  return {
    onLoad: {
      duration: 2000,
      entrance: "left",
      beforeClipPathWidth: (data, child, animate) => {
        const paddingLeft = child.type.getScale(child.props).x.range()[0];
        const paddingRight = child.props.width - child.type.getScale(child.props).x.range()[1]; // eslint-disable-line max-len
        if (animate.onLoad.entrance === "left") {
          return {
            clipWidth: paddingLeft + paddingRight
          };
        } else if (animate.onLoad.entrance === "right") {
          return {
            clipWidth: paddingLeft + paddingRight,
            translateX: child.props.width - paddingLeft - paddingRight
          };
        }else {
          Log.warn("onLoad entrance should be one of left or right");
          return {};
        }
      },
      afterClipPathWidth: (data, child, animate) => {
        if (animate.onLoad.entrance === "left") {
          return {
            clipWidth: sum(child.type.getScale(child.props).x.range())
          };
        } else if (animate.onLoad.entrance === "right") {
          return {
            clipWidth: sum(child.type.getScale(child.props).x.range()),
            translateX: 0
          };
        } else {
          Log.warn("onLoad entrance should be one of left or right");
          return {};
        }
      }
    },
    onExit: {
      duration: 500,
      beforeClipPathWidth: (data, child, exitingNodes) => {
        const filterExit = filter(data, (datum, index) => !exitingNodes[index]);
        const xVals = filterExit.map((datum) => {
          return child.type.getScale(child.props).x(datum.x);
        });
        const clipPath = min(xVals) + max(xVals);
        return clipPath;
      }
    },
    onEnter: {
      duration: 500,
      beforeClipPathWidth: (data, child, enteringNodes) => {
        const filterEnter = filter(data, (datum, index) => !enteringNodes[index]);
        const xVals = filterEnter.map((datum) => {
          return child.type.getScale(child.props).x(datum.x);
        });
        const clipPath = min(xVals) + max(xVals);
        return clipPath;

      },
      afterClipPathWidth: (data, child) => {
        const xVals = data.map((datum) => {
          return child.type.getScale(child.props).x(datum.x);
        });
        const clipPath = min(xVals) + max(xVals);
        return clipPath;
      }
    }
  };
}

export function discreteTransitions() {
  return {
    onLoad: {
      duration: 2000,
      before: () => ({ opacity: 0 }),
      after: (datum) => ({ opacity: datum.opacity || 1 })
    },
    onExit: {
      duration: 600,
      before: () => ({ opacity: 0 })
    },
    onEnter: {
      duration: 600,
      before: () => ({ opacity: 0 }),
      after: (datum) => ({ opacity: datum.opacity || 1 })
    }
  };
}
