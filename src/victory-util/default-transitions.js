/* eslint-disable func-style */
export default {
  continuousTransitions() {
    return {
      onLoad: {
        duration: 2000
      },
      onExit: {
        duration: 500
      },
      onEnter: {
        duration: 500
      }
    };
  },

  continuousPolarTransitions() {
    return {
      onLoad: {
        duration: 2000,
        before: () => ({ _y: 0, _y1: 0, _y0: 0 }),
        after: (datum) => ({ _y: datum._y, _y1: datum._y1, _y0: datum._y0 })
      },
      onExit: {
        duration: 500,
        before: (datum, index, data) => {
          const prev = index === 0 ? data[data.length - 1] : data[index - 1];
          const next = index === data.length - 1 ? data[0] : data[index + 1];
          const average = (attr) => {
            if (attr !== "_x") {
              return index === 0 ? next[attr] : prev[attr];
            }
            return ((prev[attr] + next[attr]) / 2);
          };
          return { _x: average("_x"), _y: average("_y"), _y0: average("_y0") };
        }
      },
      onEnter: {
        duration: 500,
        before: (datum, index, data) => {
          const prev = index === 0 ? data[data.length - 1] : data[index - 1];
          const next = index === data.length - 1 ? data[0] : data[index + 1];
          const average = (attr) => {
            if (attr !== "_x") {
              return index === 0 ? next[attr] : prev[attr];
            }
            return ((prev[attr] + next[attr]) / 2);
          };
          return { _x: average("_x"), _y: average("_y"), _y0: average("_y0") };
        },
        after: (datum) => ({ _x: datum._x, _y: datum._y, _y1: datum._y1, _y0: datum._y0 })
      }
    };
  },

  discreteTransitions() {
    return {
      onLoad: {
        duration: 2000,
        before: () => ({ opacity: 0 }),
        after: (datum) => datum
      },
      onExit: {
        duration: 600,
        before: () => ({ opacity: 0 })
      },
      onEnter: {
        duration: 600,
        before: () => ({ opacity: 0 }),
        after: (datum) => datum
      }
    };
  }
};
