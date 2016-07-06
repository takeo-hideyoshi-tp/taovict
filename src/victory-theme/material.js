// *
// * Colors
// *
const yellow200 = "#FFF59D";
const deepOrange600 = "#F4511E";
const lime300 = "#DCE775";
const lightGreen500 = "#8BC34A";
const teal700 = "#00796B";
const cyan900 = "#006064";
const colors = [
  deepOrange600,
  yellow200,
  lime300,
  lightGreen500,
  teal700,
  cyan900
];
const blueGrey50 = "#ECEFF1";
// const blueGrey100 = "#CFD8DC";
const blueGrey300 = "#90A4AE";
// const blueGrey400 = "#78909C";
const blueGrey700 = "#455A64";
const grey900 = "#212121";
// *
// * Typography
// *
const sansSerif = "'Roboto', 'Helvetica Neue', Helvetica, sans-serif";
const letterSpacing = "normal";
const fontSize = 12;
// *
// * Layout
// *
const padding = 8;
const baseProps = {
  width: 350,
  height: 350
};
// *
// * Labels
// *
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding,
  fill: blueGrey700
};
// *
// * Strokes
// *
const strokeDasharray = "10, 5";
const strokeLinecap = "round";
const strokeLinejoin = "round";

export default {
  area: {
    data: {
      fill: grey900
    },
    labels: baseLabelStyles,
    parent: {}
  },
  axis: {
    axis: {
      fill: "none",
      stroke: blueGrey300,
      strokeWidth: 2,
      strokeLinecap,
      strokeLinejoin
    },
    axisLabel: Object.assign({}, baseLabelStyles,
      {
        padding,
        stroke: "transparent"
      }),
    grid: {
      fill: "none",
      stroke: blueGrey50,
      strokeDasharray,
      strokeLinecap,
      strokeLinejoin
    },
    ticks: {
      fill: "none",
      padding,
      size: 5,
      stroke: blueGrey300,
      strokeWidth: 1,
      strokeLinecap,
      strokeLinejoin
    },
    tickLabels: Object.assign({}, baseLabelStyles,
      {
        fill: blueGrey700,
        stroke: "transparent"
      })
  },
  bar: {
    data: {
      fill: blueGrey700,
      opacity: 1,
      padding,
      stroke: "transparent",
      strokeWidth: 0,
      width: 5
    },
    labels: baseLabelStyles,
    parent: {}
  },
  candlestick: {
    data: {
      stroke: blueGrey700
    },
    labels: baseLabelStyles,
    parent: {},
    props: Object.assign({}, baseProps,
      {
        candeColors: {
          positive: "#ffffff",
          negative: blueGrey700
        }
      })
  },
  line: {
    data: {
      fill: "none",
      opacity: 1,
      stroke: blueGrey700,
      strokeWidth: 2
    },
    labels: Object.assign({}, baseLabelStyles,
      {
        stroke: "transparent",
        strokeWidth: 0,
        textAnchor: "start"
      }),
    parent: {}
  },
  pie: {
    props: Object.assign({}, baseProps,
      {
        colorScale: [
          "#252525",
          "#636363",
          "#969696",
          "#bdbdbd",
          "#d9d9d9",
          "#f7f7f7"
        ]
      }),
    style: {
      data: {
        padding,
        stroke: "#f7f7f7",
        strokeWidth: 1
      },
      labels: Object.assign({}, baseLabelStyles,
        {
          padding: 200,
          strokeWidth: 0,
          stroke: "transparent",
          textAnchor: "middle"
        }),
      parent: {}
    }
  },
  scatter: {
    data: {
      fill: blueGrey700,
      opacity: 1,
      stroke: "transparent",
      strokeWidth: 0
    },
    labels: Object.assign({}, baseLabelStyles,
      {
        stroke: "transparent",
        textAnchor: "middle"
      }),
    parent: {}
  },
  props: Object.assign({}, baseProps,
    {
      colorScale: colors
    }
  )
};
