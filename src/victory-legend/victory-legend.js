/*eslint no-magic-numbers: ["error", { "ignore": [1, 2, 2.5, 3] }]*/
import React from "react";
import PropTypes from "prop-types";
import { PropTypes as CustomPropTypes, Style, TextSize, Helpers } from "../victory-util/index";
import { merge, isEmpty, defaults, sumBy, maxBy } from "lodash";
import VictoryLabel from "../victory-label/victory-label";
import VictoryContainer from "../victory-container/victory-container";
import VictoryTheme from "../victory-theme/victory-theme";
import Point from "../victory-primitives/point";

const defaultLegendData = [
  { name: "Series 1" },
  { name: "Series 2" }
];

export default class VictoryLegend extends React.Component {
  static displayName = "VictoryLegend";

  static role = "legend";

  static propTypes = {
    colorScale: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.oneOf([
        "grayscale", "qualitative", "heatmap", "warm", "cool", "red", "green", "blue"
      ])
    ]),
    containerComponent: PropTypes.element,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.object,
        symbol: PropTypes.object
      })
    ),
    dataComponent: PropTypes.element,
    groupComponent: PropTypes.element,
    gutter: PropTypes.number,
    height: PropTypes.oneOfType([
      CustomPropTypes.nonNegative,
      PropTypes.func
    ]),
    itemsPerRow: PropTypes.number,
    labelComponent: PropTypes.element,
    orientation: PropTypes.oneOf(["horizontal", "vertical"]),
    padding: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
        top: PropTypes.number,
        bottom: PropTypes.number,
        left: PropTypes.number,
        right: PropTypes.number
      })
    ]),
    standalone: PropTypes.bool,
    style: PropTypes.shape({
      data: PropTypes.object,
      labels: PropTypes.object,
      parent: PropTypes.object
    }),
    symbolSpacer: PropTypes.number,
    theme: PropTypes.object,
    width: PropTypes.oneOfType([
      CustomPropTypes.nonNegative,
      PropTypes.func
    ]),
    x: PropTypes.number,
    y: PropTypes.number
  };

  static defaultProps = {
    data: defaultLegendData,
    containerComponent: <VictoryContainer/>,
    dataComponent: <Point/>,
    groupComponent: <g/>,
    gutter: 10,
    labelComponent: <VictoryLabel/>,
    orientation: "vertical",
    standalone: true,
    style: {},
    symbolSpacer: 8,
    theme: VictoryTheme.grayscale,
    x: 0,
    y: 0
  };

  calculateLegendHeight(textSizes, padding, isHorizontal) {
    const { gutter, itemsPerRow } = this.props;
    const itemCount = textSizes.length;
    const rowCount = itemsPerRow ? Math.ceil(itemCount / itemsPerRow) : 1;
    const contentHeight = isHorizontal
      ? maxBy(textSizes, "height").height * rowCount + gutter * (rowCount - 1)
      : (sumBy(textSizes, "height") + gutter * (itemCount - 1)) / rowCount;

    return padding.top + contentHeight + padding.bottom;
  }

  calculateLegendWidth(textSizes, padding, isHorizontal) {
    const { gutter, itemsPerRow, symbolSpacer } = this.props;
    const maxTextWidth = maxBy(textSizes, "width").width;
    const itemCount = textSizes.length;
    const rowCount = itemsPerRow ? Math.ceil(itemCount / itemsPerRow) : 1;
    const rowItemCount = itemsPerRow || itemCount;
    let contentWidth;

    if (isHorizontal) {
      const gutterWidth = gutter * rowItemCount;
      const symbolWidth = symbolSpacer * 3 * rowItemCount;
      const textWidth = maxTextWidth * rowItemCount;
      contentWidth =  symbolWidth + textWidth + gutterWidth;
    } else {
      contentWidth = (maxTextWidth + symbolSpacer * 2 + gutter) * rowCount;
    }

    return padding.left + contentWidth + padding.right;
  }

  getColorScale(theme) {
    const { colorScale } = this.props;
    let colorScaleOptions = colorScale || theme.colorScale;

    if (typeof colorScaleOptions === "string") {
      colorScaleOptions = Style.getColorScale(colorScaleOptions);
    }

    return !isEmpty(theme) ? colorScaleOptions || theme.colorScale : colorScaleOptions || [];
  }

  getCalculatedProps() { // eslint-disable-line max-statements
    const { role } = this.constructor;
    const { data, orientation, theme, itemsPerRow } = this.props;
    let { height, padding, width } = this.props;

    const legendTheme = theme && theme[role] ? theme[role] : {};
    const parentStyles = this.getStyles({}, legendTheme, "parent");
    const colorScale = this.getColorScale(legendTheme);
    const isHorizontal = orientation === "horizontal";
    const symbolStyles = [];
    const labelStyles = [];

    padding = Helpers.getPadding({ padding: padding || theme.padding });
    height = Helpers.evaluateProp(height || theme.height, data);
    width = Helpers.evaluateProp(width || theme.width, data);

    const textSizes = data.map((datum, i) => {
      const labelStyle = this.getStyles(datum, legendTheme, "labels");
      const textSize = TextSize.approximateTextSize(datum.name, labelStyle);
      symbolStyles[i] = this.getStyles(datum, legendTheme, "symbol", colorScale[i]);
      labelStyles[i] = labelStyle;
      return textSize;
    });

    if (!height) {
      height = this.calculateLegendHeight(textSizes, padding, isHorizontal);
    }
    if (!width) {
      width = this.calculateLegendWidth(textSizes, padding, isHorizontal);
    }

    return Object.assign({}, this.props, {
      isHorizontal,
      height,
      labelStyles,
      padding,
      parentStyles,
      symbolStyles,
      textSizes,
      width
    });
  }

  getStyles(datum, theme, key, color) { // eslint-disable-line max-params
    const { style } = this.props;
    const styleKey = key === "symbol" ? "data" : key;
    const colorScaleStyle = color ? { fill: color } : {};
    const styles = merge({}, theme.style[styleKey], colorScaleStyle, style[styleKey], datum[key]);
    return Helpers.evaluateStyle(styles, datum);
  }

  getSymbolSize(datum, fontSize) {
    return datum.symbol && datum.symbol.size ? datum.symbol.size : fontSize / 2.5;
  }

  getSymbolProps(datum, props, i) {
    const {
      dataComponent,
      gutter,
      isHorizontal,
      itemsPerRow,
      labelStyles,
      padding,
      symbolSpacer,
      symbolStyles,
      textSizes
    } = props;

    const { fontSize } = labelStyles[i];
    const symbolShift = fontSize / 2;
    const style = symbolStyles[i];
    const rowHeight = fontSize + gutter;
    const maxTextWidth = maxBy(textSizes, "width").width;
    let itemRowIndex = i;
    let rowSpacer = 0;
    let rowIndex = 0;

    if (itemsPerRow) {
      rowIndex = Math.floor(i / itemsPerRow);
      rowSpacer = rowHeight * rowIndex;
      itemRowIndex = i % itemsPerRow;
    }

    const symbolCoords = isHorizontal ? {
      x: padding.left + symbolShift + (fontSize + symbolSpacer + maxTextWidth + gutter) * itemRowIndex,
      y: padding.top + symbolShift + rowSpacer
    } : {
      x: padding.left + symbolShift + (rowHeight + maxTextWidth) * rowIndex,
      y: padding.top + symbolShift + rowHeight * itemRowIndex
    };

    return defaults({}, dataComponent.props, {
      key: `symbol-${i}`,
      style,
      size: this.getSymbolSize(datum, fontSize),
      symbol: style.type,
      ...symbolCoords
    });
  }

  getLabelProps(datum, props, i) {
    const {
      gutter,
      isHorizontal,
      itemsPerRow,
      labelComponent,
      labelStyles,
      padding,
      symbolSpacer,
      textSizes
    } = props;

    const style = labelStyles[i];
    const { fontSize } = style;
    const symbolShift = fontSize / 2;
    const rowHeight = fontSize + gutter;
    const maxTextWidth = maxBy(textSizes, "width").width;
    let itemRowIndex = i;
    let rowSpacer = 0;
    let rowIndex = 0;

    if (itemsPerRow) {
      rowIndex = Math.floor(i / itemsPerRow);
      rowSpacer = rowHeight * rowIndex;
      itemRowIndex = i % itemsPerRow;
    }

    const labelCoords = isHorizontal ? {
      x: padding.left + (fontSize + symbolSpacer) * (itemRowIndex + 1) + (maxTextWidth + gutter) * itemRowIndex,
      y: padding.top + symbolShift + rowSpacer
    } : {
      x: padding.left + fontSize + symbolSpacer + (rowHeight + maxTextWidth) * rowIndex,
      y: padding.top + symbolShift + rowHeight * itemRowIndex
    };

    return defaults({},
      labelComponent.props,
      {
        key: `label-${i}`,
        style,
        text: datum.name,
        ...labelCoords
      }
    );
  }

  renderLegendItems(props) {
    const { data, dataComponent, labelComponent } = props;
    const legendData = isEmpty(data) ? defaultLegendData : data;

    const dataComponents = legendData.map((datum, i) => {
      return React.cloneElement(
        dataComponent,
        this.getSymbolProps(datum, props, i)
      );
    });

    const labelComponents = legendData.map((datum, i) => {
      return React.cloneElement(
        labelComponent,
        this.getLabelProps(datum, props, i)
      );
    });

    return [...dataComponents, ...labelComponents];
  }

  renderGroup(props, children) {
    const { groupComponent, height, standalone, width, x, y } = props;
    const style = props.style || {};
    let groupProps = { role: "presentation" };
    const transform = `translate(${x}, ${y})`;

    if (!standalone) {
      groupProps = Object.assign(groupProps, { height, width, transform, style: style.parent });
    }

    return React.cloneElement(groupComponent, groupProps, children);
  }

  renderContainer(props, children) {
    const { containerComponent, height, width } = props;
    const style = props.style || {};
    return React.cloneElement(
      containerComponent,
      { height, width, style: style.parent },
      children
    );
  }

  render() {
    const props = this.getCalculatedProps();
    const group = this.renderGroup(props, this.renderLegendItems(props));
    return props.standalone ? this.renderContainer(props, group) : group;
  }
}
