import { assign, keys, omit, defaults, without } from "lodash";
import { Helpers, LabelHelpers, Scale, Domain, Data } from "victory-core";
import { voronoi as d3Voronoi } from "d3-voronoi";

export default {
  getBaseProps(props, fallbackProps) {
    const modifiedProps = Helpers.modifyProps(props, fallbackProps, "scatter");
    props = assign({}, modifiedProps, this.getCalculatedValues(modifiedProps));
    const {
      data, domain, events, height, origin, padding, polar, polygons,
      scale, sharedEvents, standalone, style, theme, width
    } = props;
    const initialChildProps = { parent: {
      style: style.parent, scale, domain, data, standalone, height, width, theme,
      origin, polar, padding
    } };

    return data.reduce((childProps, datum, index) => {
      const polygon = without(polygons[index], "data");
      const eventKey = datum.eventKey;
      const { x, y } = Helpers.scalePoint(props, datum);
      const dataProps = {
        x, y, datum, data, index, scale, polygon, origin,
        size: props.size,
        style: this.getDataStyles(datum, style.data)
      };

      childProps[eventKey] = { data: dataProps };
      const text = LabelHelpers.getText(props, datum, index);
      if (text !== undefined && text !== null || events || sharedEvents) {
        childProps[eventKey].labels = LabelHelpers.getProps(props, index);
      }

      return childProps;
    }, initialChildProps);
  },

  getCalculatedValues(props) {
    const defaultStyles = props.theme && props.theme.voronoi && props.theme.voronoi.style ?
      props.theme.voronoi.style : {};
    const style = Helpers.getStyles(props.style, defaultStyles);
    const data = Data.getData(props);
    const range = {
      x: Helpers.getRange(props, "x"),
      y: Helpers.getRange(props, "y")
    };
    const domain = {
      x: Domain.getDomain(props, "x"),
      y: Domain.getDomain(props, "y")
    };
    const scale = {
      x: Scale.getBaseScale(props, "x").domain(domain.x).range(range.x),
      y: Scale.getBaseScale(props, "y").domain(domain.y).range(range.y)
    };
    const voronoi = this.getVoronoi(props, range, scale);
    const polygons = voronoi.polygons(data);
    const origin = props.polar ? props.origin || Helpers.getPolarOrigin(props) : undefined;
    return { domain, data, scale, style, polygons, origin };
  },

  getVoronoi(props, range, scale) {
    const minRange = [Math.min(...range.x), Math.min(...range.y)];
    const maxRange = [Math.max(...range.x), Math.max(...range.y)];
    const angleAccessor = (d) => {
      const x = scale.x(d._x1 !== undefined ? d._x1 : d._x);
      return -1 * x + Math.PI / 2;
    };
    const xAccessor = (d) => scale.x(d._x1 !== undefined ? d._x1 : d._x);
    return d3Voronoi()
      .x((d) => props.polar ? angleAccessor(d) : xAccessor(d))
      .y((d) => scale.y(d._y1 !== undefined ? d._y1 : d._y))
      .extent([minRange, maxRange]);
  },

  getDataStyles(datum, style) {
    const numKeys = keys(datum).filter((k) => typeof k === "number");
    const omitKeys = [
      "x", "y", "_x", "_y", "eventKey", "label"
    ];
    const stylesFromData = omit(datum, [...omitKeys, ...numKeys]);
    return defaults({}, stylesFromData, style);
  }
};
