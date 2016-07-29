/**
 * Client tests
 */
import * as Victory from "src/index";

describe("victory", () => {
  it("has expected properties", () => { // eslint-disable-line max-statements
    expect(Victory.VictoryAnimation).not.to.equal(undefined);
    expect(Victory.VictoryArea).not.to.equal(undefined);
    expect(Victory.VictoryAxis).not.to.equal(undefined);
    expect(Victory.VictoryBar).not.to.equal(undefined);
    expect(Victory.VictoryCandlestick).not.to.equal(undefined);
    expect(Victory.VictoryChart).not.to.equal(undefined);
    expect(Victory.VictoryContainer).not.to.equal(undefined);
    expect(Victory.VictoryErrorBar).not.to.equal(undefined);
    expect(Victory.VictoryGroup).not.to.equal(undefined);
    expect(Victory.VictoryLine).not.to.equal(undefined);
    expect(Victory.VictoryLabel).not.to.equal(undefined);
    expect(Victory.VictoryPie).not.to.equal(undefined);
    expect(Victory.VictoryScatter).not.to.equal(undefined);
    expect(Victory.VictoryStack).not.to.equal(undefined);
    expect(Victory.VictoryTheme).not.to.equal(undefined);
    expect(Victory.VictoryTransition).not.to.equal(undefined);
    expect(Victory.VictorySharedEvents).not.to.equal(undefined);
  });
});
