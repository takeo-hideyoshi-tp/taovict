import React from "react";
import { VictoryLegend } from "../src/index";

const svgStyle = { border: "1px solid #ccc" };
const data = [{
  name: "Series 1",
  symbol: {
    type: "circle",
    fill: "green"
  }
}, {
  name: "Long Series Name",
  symbol: {
    type: "triangleUp",
    fill: "blue"
  }
}, {
  name: "Series 3",
  symbol: {
    type: "diamond",
    fill: "pink"
  }
}, {
  name: "Series 4",
  symbol: { type: "plus" }
}, {
  name: "Series 5",
  symbol: {
    type: "star",
    fill: "red"
  }
}];

const LegendDemo = () => (
  <div className="demo">
    <VictoryLegend data={data} />
    <svg
      height={56}
      width={525}
      style={svgStyle}
    >
      <VictoryLegend
        data={data}
        padding={20}
        standalone={false}
        orientation="horizontal"
        style={{ label: { fill: "#ccc" }}}
      />
    </svg>
  </div>
);

export default LegendDemo;
