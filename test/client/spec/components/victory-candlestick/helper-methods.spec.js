/* eslint no-unused-expressions: 0 */

import Helpers from "src/components/victory-candlestick/helper-methods";

describe("victory-candlestick/helper-methods", () => {
  describe("getData", () => {
    const dataSet = [{x: 5, open: 10, close: 20, high: 25, low: 5}];
    it("returns an object with an array of y values", () => {
      const dataResult = Helpers.getData({data: dataSet, x: "x", open: "open",
      close: "close", high: "high", low: "low"});
      expect(dataResult[0]._y).to.eql([10, 20, 25, 5]);
    });
  });

  describe("getDomain", () => {
    const dataSet = [{x: 5, open: 10, close: 20, high: 25, low: 5},
    {x: 10, open: 15, close: 25, high: 30, low: 10}];
    it("returns a domain array for the x axis", () => {
      const domainXResult = Helpers.getDomain({data: dataSet, x: "x", open: "open",
      close: "close", high: "high", low: "low"}, "x");
      expect(domainXResult).to.eql([5, 10]);
    });

    it("returns a domain array for the y axis", () => {
      const domainYResult = Helpers.getDomain({data: dataSet, open: "open",
      close: "close", high: "high", low: "low"}, "y");
      expect(domainYResult).to.eql([5, 30]);
    });
  });
});
