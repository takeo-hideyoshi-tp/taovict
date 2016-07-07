/**
 * Client tests
 */
/*eslint-disable max-nested-callbacks */
/* global sinon */
/* eslint no-unused-expressions: 0 */
import React from "react";
import { shallow, mount, render } from "enzyme";
import { omit, range } from "lodash";
import * as d3Scale from "d3-scale";
import VictoryErrorBar from "src/components/victory-errorbar/victory-errorbar";
import ErrorBar from "src/components/victory-errorbar/errorbar";
import Borders from "src/components/victory-errorbar/helpers/borders";
import Cross from "src/components/victory-errorbar/helpers/cross";

class MyErrorBar extends React.Component {

  render() { }
}

describe("components/victory-errorbar", () => {
  describe("default component rendering", () => {
    it("renders an svg with the correct width and height", () => {
      const wrapper = mount(
        <VictoryErrorBar/>
      );
      const svg = wrapper.find("svg");
      expect(svg.prop("style").width).to.equal("100%");
      expect(svg.prop("style").height).to.equal("auto");
    });

    it("renders an svg with the correct viewBox", () => {
      const wrapper = mount(
        <VictoryErrorBar/>
      );
      const svg = wrapper.find("svg");
      const viewBoxValue =
        `0 0 ${450} ${300}`;
      expect(svg.prop("viewBox")).to.equal(viewBoxValue);
    });

    it("renders 4 errors", () => {
      const wrapper = shallow(
        <VictoryErrorBar/>
      );
      const errorbars = wrapper.find(ErrorBar);
      expect(errorbars.length).to.equal(4);
    });
  });

  describe("symmetric error, rendering data", () => {
    it("renders injected errors for {x, y}", () => {
      const data = range(10).map((i) => ({x: i, y: i, errorX: 0.1, errorY: 0.2}));
      const wrapper = shallow(
        <VictoryErrorBar data={data} dataComponent={<MyErrorBar />} />
      );

      const errors = wrapper.find(MyErrorBar);
      expect(errors.length).to.equal(10);
    });

    it("renders errors for {x, y}", () => {
      const data = range(10).map((i) => ({x: i, y: i, errorX: 0.1, errorY: 0.2}));
      const wrapper = shallow(
        <VictoryErrorBar data={data}/>
      );
      const errors = wrapper.find(ErrorBar);
      expect(errors.length).to.equal(10);
    });

    it("renders errors with error bars, check total svg lines", () => {
      const svgDimensions = {width: 350, height: 200, padding: 75};
      const wrapper = render(
        <VictoryErrorBar
          data={[
            {x: 0, y: 0, errorX: 0.1, errorY: 0.2},
            {x: 2, y: 3, errorX: 0.1, errorY: 0.2},
            {x: 5, y: 5, errorX: 0.1, errorY: 0.2}
          ]}
          {...svgDimensions}
        />
      );
      expect(wrapper.find("line")).to.have.length(24);
    });

    it("renders errors with error bars, check helper component render amount", () => {
      const svgDimensions = {width: 350, height: 200, padding: 75};
      const wrapper = mount(
        <VictoryErrorBar
          data={[
            {x: 0, y: 0, errorX: 0.1, errorY: 0.2},
            {x: 2, y: 3, errorX: 0.1, errorY: 0.2},
            {x: 5, y: 5, errorX: 0.1, errorY: 0.2}
          ]}
          {...svgDimensions}
        />
      );
      const Data = wrapper.find(ErrorBar);
      Data.forEach((node) => {
        expect(node.find(Borders)).to.have.length(1);
        expect(node.find(Cross)).to.have.length(1);
      });
    });

    it("should check right border of error bars positions", () => {
      const svgDimensions = {width: 350, height: 200, padding: 75};
      const borderWidth = 10;
      const data = [
        {x: 0, y: 0, errorX: 0.1, errorY: 0.2},
        {x: 2, y: 3, errorX: 0.1, errorY: 0.2},
        {x: 5, y: 5, errorX: 0.1, errorY: 0.2}
      ];
      const wrapper = mount(
        <VictoryErrorBar
          data={data}
          {...svgDimensions}
        />
      );

      const xScale = d3Scale.scaleLinear()
        .domain([0, 5])
        .range([svgDimensions.padding, svgDimensions.width - svgDimensions.padding]);

      const yScale = d3Scale.scaleLinear()
        .domain([0, 5])
        .range([svgDimensions.height - svgDimensions.padding, svgDimensions.padding]);

      const Data = wrapper.find(ErrorBar);
      Data.forEach((node, i) => {
        const errorX = xScale(data[i].errorX);
        const xScaleMax = xScale.range()[1];
        const positiveErrorX = xScale(data[i].x) + errorX >= xScaleMax
          ? xScaleMax : (xScale(data[i].x) + errorX);

        // right border
        expect(node.find(Borders).find("line").first().props().x1)
          .to.equal(positiveErrorX);
        expect(node.find(Borders).find("line").first().props().x2)
          .to.equal(positiveErrorX);
        expect(node.find(Borders).find("line").first().props().y1)
          .to.equal(yScale(data[i].y) - borderWidth);
        expect(node.find(Borders).find("line").first().props().y2)
          .to.equal(yScale(data[i].y) + borderWidth);
      });
    });

    it("should check left border of error bars positions", () => {
      const svgDimensions = {width: 350, height: 200, padding: 75};
      const borderWidth = 10;
      const data = [
        {x: 0, y: 0, errorX: 0.1, errorY: 0.2},
        {x: 2, y: 3, errorX: 0.1, errorY: 0.2},
        {x: 5, y: 5, errorX: 0.1, errorY: 0.2}
      ];
      const wrapper = mount(
        <VictoryErrorBar
          data={data}
          {...svgDimensions}
        />
      );

      const xScale = d3Scale.scaleLinear()
        .domain([0, 5])
        .range([svgDimensions.padding, svgDimensions.width - svgDimensions.padding]);

      const yScale = d3Scale.scaleLinear()
        .domain([0, 5])
        .range([svgDimensions.height - svgDimensions.padding, svgDimensions.padding]);

      const Data = wrapper.find(ErrorBar);
      Data.forEach((node, i) => {
        const errorX = xScale(data[i].errorX);
        const xScaleMin = xScale.range()[0];
        const negativeErrorX = xScale(data[i].x) - errorX <= xScaleMin
          ? xScaleMin : (xScale(data[i].x) - errorX);

        // left border
        expect(node.find(Borders).find("line").at(1).props().x1)
          .to.equal(negativeErrorX);
        expect(node.find(Borders).find("line").at(1).props().x2)
          .to.equal(negativeErrorX);
        expect(node.find(Borders).find("line").at(1).props().y1)
          .to.equal(yScale(data[i].y) - borderWidth);
        expect(node.find(Borders).find("line").at(1).props().y2)
          .to.equal(yScale(data[i].y) + borderWidth);
      });
    });

    it("should check bottom border of error bars positions", () => {
      const svgDimensions = {width: 350, height: 200, padding: 75};
      const borderWidth = 10;
      const data = [
        {x: 0, y: 0, errorX: 0.1, errorY: 0.2},
        {x: 2, y: 3, errorX: 0.1, errorY: 0.2},
        {x: 5, y: 5, errorX: 0.1, errorY: 0.2}
      ];
      const wrapper = mount(
        <VictoryErrorBar
          data={data}
          {...svgDimensions}
        />
      );

      const xScale = d3Scale.scaleLinear()
        .domain([0, 5])
        .range([svgDimensions.padding, svgDimensions.width - svgDimensions.padding]);

      const yScale = d3Scale.scaleLinear()
        .domain([0, 5])
        .range([svgDimensions.height - svgDimensions.padding, svgDimensions.padding]);

      const Data = wrapper.find(ErrorBar);
      Data.forEach((node, i) => {
        const errorY = yScale(data[i].errorY);
        const yScaleMin = yScale.range()[1];
        const negativeErrorY = yScale(data[i].y) - errorY <= yScaleMin
          ? yScaleMin : (yScale(data[i].y) - errorY);

        // bottom border
        expect(node.find(Borders).find("line").at(2).props().x1)
          .to.equal(xScale(data[i].x) - borderWidth);
        expect(node.find(Borders).find("line").at(2).props().x2)
          .to.equal(xScale(data[i].x) + borderWidth);
        expect(node.find(Borders).find("line").at(2).props().y1)
          .to.equal(negativeErrorY);
        expect(node.find(Borders).find("line").at(2).props().y2)
          .to.equal(negativeErrorY);
      });
    });

    it("should check top border of error bars positions", () => {
      const svgDimensions = {width: 350, height: 200, padding: 75};
      const borderWidth = 10;
      const data = [
        {x: 0, y: 0, errorX: 0.1, errorY: 0.2},
        {x: 2, y: 3, errorX: 0.1, errorY: 0.2},
        {x: 5, y: 5, errorX: 0.1, errorY: 0.2}
      ];
      const wrapper = mount(
        <VictoryErrorBar
          data={data}
          {...svgDimensions}
        />
      );

      const xScale = d3Scale.scaleLinear()
        .domain([0, 5])
        .range([svgDimensions.padding, svgDimensions.width - svgDimensions.padding]);

      const yScale = d3Scale.scaleLinear()
        .domain([0, 5])
        .range([svgDimensions.height - svgDimensions.padding, svgDimensions.padding]);

      const Data = wrapper.find(ErrorBar);
      Data.forEach((node, i) => {
        const errorY = yScale(data[i].errorY);
        const yScaleMax = yScale.range()[0];
        const positiveErrorY = yScale(data[i].y) + errorY >= yScaleMax
          ? yScaleMax : (yScale(data[i].y) + errorY);

        // bottom border
        expect(node.find(Borders).find("line").at(3).props().x1)
          .to.equal(xScale(data[i].x) - borderWidth);
        expect(node.find(Borders).find("line").at(3).props().x2)
          .to.equal(xScale(data[i].x) + borderWidth);
        expect(node.find(Borders).find("line").at(3).props().y1)
          .to.equal(positiveErrorY);
        expect(node.find(Borders).find("line").at(3).props().y2)
          .to.equal(positiveErrorY);
      });
    });

    it("should check top cross line of error bars positions", () => {
      const svgDimensions = {width: 350, height: 200, padding: 75};
      const data = [
        {x: 0, y: 0, errorX: 0.1, errorY: 0.2},
        {x: 2, y: 3, errorX: 0.1, errorY: 0.2},
        {x: 5, y: 5, errorX: 0.1, errorY: 0.2}
      ];
      const wrapper = mount(
        <VictoryErrorBar
          data={data}
          {...svgDimensions}
        />
      );

      const xScale = d3Scale.scaleLinear()
        .domain([0, 5])
        .range([svgDimensions.padding, svgDimensions.width - svgDimensions.padding]);

      const yScale = d3Scale.scaleLinear()
        .domain([0, 5])
        .range([svgDimensions.height - svgDimensions.padding, svgDimensions.padding]);

      const Data = wrapper.find(ErrorBar);
      Data.forEach((node, i) => {
        const errorY = yScale(data[i].errorY);
        const yScaleMax = yScale.range()[0];
        const positiveErrorY = yScale(data[i].y) + errorY >= yScaleMax
          ? yScaleMax : (yScale(data[i].y) + errorY);

        expect(node.find(Cross).find("line").first().props().x1)
          .to.equal(xScale(data[i].x));
        expect(node.find(Cross).find("line").first().props().x2)
          .to.equal(xScale(data[i].x));
        expect(node.find(Cross).find("line").first().props().y1)
          .to.equal(yScale(data[i].y));
        expect(node.find(Cross).find("line").first().props().y2)
          .to.equal(positiveErrorY);
      });
    });

    it("should check bottom cross line of error bars positions", () => {
      const svgDimensions = {width: 350, height: 200, padding: 75};
      const data = [
        {x: 0, y: 0, errorX: 0.1, errorY: 0.2},
        {x: 2, y: 3, errorX: 0.1, errorY: 0.2},
        {x: 5, y: 5, errorX: 0.1, errorY: 0.2}
      ];
      const wrapper = mount(
        <VictoryErrorBar
          data={data}
          {...svgDimensions}
        />
      );

      const xScale = d3Scale.scaleLinear()
        .domain([0, 5])
        .range([svgDimensions.padding, svgDimensions.width - svgDimensions.padding]);

      const yScale = d3Scale.scaleLinear()
        .domain([0, 5])
        .range([svgDimensions.height - svgDimensions.padding, svgDimensions.padding]);

      const Data = wrapper.find(ErrorBar);
      Data.forEach((node, i) => {
        const errorY = yScale(data[i].errorY);
        const yScaleMin = yScale.range()[1];
        const negativeErrorY = yScale(data[i].y) - errorY <= yScaleMin
          ? yScaleMin : (yScale(data[i].y) - errorY);

        expect(node.find(Cross).find("line").at(1).props().x1)
          .to.equal(xScale(data[i].x));
        expect(node.find(Cross).find("line").at(1).props().x2)
          .to.equal(xScale(data[i].x));
        expect(node.find(Cross).find("line").at(1).props().y1)
          .to.equal(yScale(data[i].y));
        expect(node.find(Cross).find("line").at(1).props().y2)
          .to.equal(negativeErrorY);
      });
    });

    it("should check left cross line of error bars positions", () => {
      const svgDimensions = {width: 350, height: 200, padding: 75};
      const data = [
        {x: 0, y: 0, errorX: 0.1, errorY: 0.2},
        {x: 2, y: 3, errorX: 0.1, errorY: 0.2},
        {x: 5, y: 5, errorX: 0.1, errorY: 0.2}
      ];
      const wrapper = mount(
        <VictoryErrorBar
          data={data}
          {...svgDimensions}
        />
      );

      const xScale = d3Scale.scaleLinear()
        .domain([0, 5])
        .range([svgDimensions.padding, svgDimensions.width - svgDimensions.padding]);

      const yScale = d3Scale.scaleLinear()
        .domain([0, 5])
        .range([svgDimensions.height - svgDimensions.padding, svgDimensions.padding]);

      const Data = wrapper.find(ErrorBar);
      Data.forEach((node, i) => {
        const errorX = xScale(data[i].errorX);
        const xScaleMin = xScale.range()[0];
        const negativeErrorX = xScale(data[i].x) - errorX <= xScaleMin
          ? xScaleMin : (xScale(data[i].x) - errorX);

        expect(node.find(Cross).find("line").at(2).props().x1)
          .to.equal(xScale(data[i].x));
        expect(node.find(Cross).find("line").at(2).props().x2)
          .to.equal(negativeErrorX);
        expect(node.find(Cross).find("line").at(2).props().y1)
          .to.equal(yScale(data[i].y));
        expect(node.find(Cross).find("line").at(2).props().y2)
          .to.equal(yScale(data[i].y));
      });
    });

    it("should check right cross line of error bars positions", () => {
      const svgDimensions = {width: 350, height: 200, padding: 75};
      const data = [
        {x: 0, y: 0, errorX: 0.1, errorY: 0.2},
        {x: 2, y: 3, errorX: 0.1, errorY: 0.2},
        {x: 5, y: 5, errorX: 0.1, errorY: 0.2}
      ];
      const wrapper = mount(
        <VictoryErrorBar
          data={data}
          {...svgDimensions}
        />
      );

      const xScale = d3Scale.scaleLinear()
        .domain([0, 5])
        .range([svgDimensions.padding, svgDimensions.width - svgDimensions.padding]);

      const yScale = d3Scale.scaleLinear()
        .domain([0, 5])
        .range([svgDimensions.height - svgDimensions.padding, svgDimensions.padding]);

      const Data = wrapper.find(ErrorBar);
      Data.forEach((node, i) => {
        const errorX = xScale(data[i].errorX);
        const xScaleMax = xScale.range()[1];
        const positiveErrorX = xScale(data[i].x) + errorX >= xScaleMax
          ? xScaleMax : (xScale(data[i].x) + errorX);

        expect(node.find(Cross).find("line").at(3).props().x1)
          .to.equal(xScale(data[i].x));
        expect(node.find(Cross).find("line").at(3).props().x2)
          .to.equal(positiveErrorX);
        expect(node.find(Cross).find("line").at(3).props().y1)
          .to.equal(yScale(data[i].y));
        expect(node.find(Cross).find("line").at(3).props().y2)
          .to.equal(yScale(data[i].y));
      });
    });
  });

  describe("asymmetric error, rendering data", () => {
    it("renders injected errors for {x, y}", () => {
      const data = range(10).map((i) => ({x: i, y: i, errorX: [0.1, 0.2], errorY: [0.2, 0.5]}));
      const wrapper = shallow(
        <VictoryErrorBar data={data} dataComponent={<MyErrorBar />} />
      );

      const errors = wrapper.find(MyErrorBar);
      expect(errors.length).to.equal(10);
    });

    it("renders errors for {x, y}", () => {
      const data = range(10).map((i) => ({x: i, y: i, errorX: [0.1, 0.2], errorY: [0.2, 1]}));
      const wrapper = shallow(
        <VictoryErrorBar data={data}/>
      );
      const errors = wrapper.find(ErrorBar);
      expect(errors.length).to.equal(10);
    });

    it("renders errors with error bars, check total svg lines", () => {
      const svgDimensions = {width: 350, height: 200, padding: 75};
      const wrapper = render(
        <VictoryErrorBar
          data={[
            {x: 0, y: 0, errorX: [0.1, 0.5], errorY: [0.2, 0.3]},
            {x: 2, y: 3, errorX: [0.1, 0.5], errorY: [0.2, 0.4]},
            {x: 5, y: 5, errorX: [0.1, 0.5], errorY: [0.2, 0.1]}
          ]}
          {...svgDimensions}
        />
      );
      expect(wrapper.find("line")).to.have.length(24);
    });

    it("renders errors with error bars, check helper component render amount", () => {
      const svgDimensions = {width: 350, height: 200, padding: 75};
      const wrapper = mount(
        <VictoryErrorBar
          data={[
            {x: 0, y: 0, errorX: 0.1, errorY: 0.2},
            {x: 2, y: 3, errorX: 0.1, errorY: 0.2},
            {x: 5, y: 5, errorX: 0.1, errorY: 0.2}
          ]}
          {...svgDimensions}
        />
      );
      const Data = wrapper.find(ErrorBar);
      Data.forEach((node) => {
        expect(node.find(Borders)).to.have.length(1);
        expect(node.find(Cross)).to.have.length(1);
      });
    });
  });

  describe("event handling", () => {
    it("attaches an event to the parent svg", () => {
      const clickHandler = sinon.spy();
      const wrapper = mount(
        <VictoryErrorBar
          events={[{
            target: "parent",
            eventHandlers: {onClick: clickHandler}
          }]}
        />
      );
      const svg = wrapper.find("svg");
      svg.simulate("click");
      expect(clickHandler).called;
      // the first argument is the standard evt object
      expect(clickHandler.args[0][1])
        .to.include.keys("data", "scale", "width", "height", "style");
    });

    it("attaches an event to data, click border lines", () => {
      const clickHandler = sinon.spy();
      const wrapper = mount(
        <VictoryErrorBar
          events={[{
            target: "data",
            eventHandlers: {onClick: clickHandler}
          }]}
        />
      );
      const Data = wrapper.find(ErrorBar);
      Data.forEach((node, index) => {
        const initialProps = Data.at(index).props();
        // click the border line
        node.find(Borders).find("line").first().simulate("click");
        expect(clickHandler.called).to.equal(true);
        // the first argument is the standard evt object
        expect(omit(clickHandler.args[index][1], ["events", "key"]))
          .to.eql(omit(initialProps, ["events", "key"]));
        expect(`${clickHandler.args[index][2]}`).to.eql(`${index}`);
      });
    });

    it("attaches an event to data, click cross lines", () => {
      const clickHandler = sinon.spy();
      const wrapper = mount(
        <VictoryErrorBar
          events={[{
            target: "data",
            eventHandlers: {onClick: clickHandler}
          }]}
        />
      );
      const Data = wrapper.find(ErrorBar);
      Data.forEach((node, index) => {
        const initialProps = Data.at(index).props();
        // click the cross line
        node.find(Cross).find("line").first().simulate("click");
        expect(clickHandler.called).to.equal(true);
        // the first argument is the standard evt object
        expect(omit(clickHandler.args[index][1], ["events", "key"]))
          .to.eql(omit(initialProps, ["events", "key"]));
        expect(`${clickHandler.args[index][2]}`).to.eql(`${index}`);
      });
    });
  });
});
