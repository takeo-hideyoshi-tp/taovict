import { omit, defaults, isArray, flatten, pick } from "lodash";
import { Helpers, Events } from "victory-core";
import Scale from "../../helpers/scale";
import Axis from "../../helpers/axis";
import Domain from "../../helpers/domain";
import Data from "../../helpers/data";

export default {
  getBaseProps(props, fallbackProps) {
    const modifiedProps = Helpers.modifyProps(props, fallbackProps);
    const calculatedValues = this.getCalculatedValues(modifiedProps, fallbackProps);
    const { data, style, scale } = calculatedValues;
    const { groupComponent, height, width } = modifiedProps;
    const childProps = { parent: {style: style.parent, scale, data, height, width} };
    for (let index = 0, len = data.length; index < len; index++) {
      const datum = data[index];
      const eventKey = datum.eventKey;
      const x = scale.x(datum.x);
      const y = scale.y(datum.y);

      const errorX = this.getErrors(datum, scale, "x");
      const errorY = this.getErrors(datum, scale, "y");

      const dataStyle = this.getDataStyles(datum, style.data);
      const dataProps = {
        x, y, scale, datum, index, style: dataStyle, errorX, errorY, groupComponent,
        borderWidth: modifiedProps.borderWidth
      };

      const text = this.getLabelText(modifiedProps, datum, index);
      const labelStyle = this.getLabelStyle(style.labels, dataProps);
      const labelProps = {
        style: labelStyle,
        x: x - labelStyle.padding,
        y: y - labelStyle.padding,
        text,
        index,
        scale,
        datum: dataProps.datum,
        textAnchor: labelStyle.textAnchor,
        verticalAnchor: labelStyle.verticalAnchor || "end",
        angle: labelStyle.angle
      };

      childProps[eventKey] = {
        data: dataProps,
        labels: labelProps
      };
    }
    return childProps;
  },

  getErrorData(props) {
    if (props.data) {
      return this.formatErrorData(props.data, props);
    } else {
      const generatedData = (props.errorX || props.errorY) && this.generateData(props);
      return this.formatErrorData(generatedData, props);
    }
  },

  getErrors(datum, scale, axis) {
    /**
     * check if it is asymmetric error or symmetric error, asymmetric error should be an array
     * and the first value is the positive error, the second is the negative error
     * @param  {Boolean} isArray(errorX)
     * @return {String or Array}
     */

    const errorNames = {x: "errorX", y: "errorY"};
    const errors = datum[errorNames[axis]];
    return isArray(errors) ?
      [ scale[axis](errors[0] + datum[axis]), scale[axis](datum[axis] - errors[1]) ] :
      [ scale[axis](errors + datum[axis]), scale[axis](datum[axis] - errors) ];
  },

  formatErrorData(dataset, props) {
    if (!dataset) {
      return [];
    }
    const accessor = {
      x: Helpers.createAccessor(props.x),
      y: Helpers.createAccessor(props.y),
      errorX: Helpers.createAccessor(props.errorX),
      errorY: Helpers.createAccessor(props.errorY)
    };
    return dataset.map((datum) => {
      const x = accessor.x(datum);
      const y = accessor.y(datum);
      let errorX = accessor.errorX(datum);
      let errorY = accessor.errorY(datum);
      // check if the value is negative, if it is set to 0
      if (!isArray(errorX) && errorX < 0 || !errorX) {
        errorX = 0;
      } else if (isArray(errorX)) {
        errorX.map((err) => {
          if (err < 0) {
            return 0;
          }
          return err;
        });
      }

      if (!isArray(errorY) && errorY < 0 || !errorY) {
        errorY = 0;
      } else if (isArray(errorY)) {
        errorY.map((err) => {
          if (err < 0) {
            return 0;
          }
          return err;
        });
      }

      return Object.assign(
          {},
          datum,
          { x, y, errorX, errorY }
        );
    });
  },

  getDomain(props, axis) {
    const propsDomain = Domain.getDomainFromProps(props, axis);
    if (propsDomain) {
      return Domain.padDomain(propsDomain, props, axis);
    }
    const categoryDomain = Domain.getDomainFromCategories(props, axis);
    if (categoryDomain) {
      return Domain.padDomain(categoryDomain, props, axis);
    }
    const dataset = this.getErrorData(props);
    const domain = this.getDomainFromData(props, axis, dataset);
    return Domain.padDomain(domain, props, axis);
  },

  getDomainFromData(props, axis, dataset) {
    const currentAxis = Axis.getCurrentAxis(axis, props.horizontal);
    let error;
    if (currentAxis === "x") {
      error = "errorX";
    } else if (currentAxis === "y") {
      error = "errorY";
    }
    const axisData = flatten(dataset).map((datum) => datum[currentAxis]);
    const errorData = flatten(flatten(dataset).map((datum) => {
      let errorMax;
      let errorMin;
      if (isArray(datum[error])) {
        errorMax = datum[error][0] + datum[currentAxis];
        errorMin = datum[currentAxis] - datum[error][1];
      } else {
        errorMax = datum[error] + datum[currentAxis];
        errorMin = datum[currentAxis] - datum[error];
      }
      return [errorMax, errorMin];
    }));

    const allData = axisData.concat(errorData);
    const min = Math.min(...allData);
    const max = Math.max(...allData);
    // TODO: is this the correct behavior, or should we just error. How do we
    // handle charts with just one data point?
    if (min === max) {
      const adjustedMax = max === 0 ? 1 : max;
      return [0, adjustedMax];
    }
    return [min, max];
  },

  getCalculatedValues(props, fallbackProps) {
    const defaultStyles = props.theme && props.theme.errorbar ? props.theme.errorbar
    : fallbackProps.style;
    const style = Helpers.getStyles(props.style, defaultStyles, "auto", "100%");
    const assignData = Object.assign(Data.getData(props), this.getErrorData(props));
    const data = Events.addEventKeys(props, assignData);
    const range = {
      x: Helpers.getRange(props, "x"),
      y: Helpers.getRange(props, "y")
    };
    const domain = {
      x: this.getDomain(props, "x"),
      y: this.getDomain(props, "y")
    };
    const scale = {
      x: Scale.getBaseScale(props, "x").domain(domain.x).range(range.x),
      y: Scale.getBaseScale(props, "y").domain(domain.y).range(range.y)
    };

    return {data, scale, style};
  },

  getDataStyles(datum, style) {
    const stylesFromData = omit(datum, [
      "x", "y", "name"
    ]);
    const baseDataStyle = defaults({}, stylesFromData, style);
    return Helpers.evaluateStyle(baseDataStyle, datum);
  },

  getLabelText(props, datum, index) {
    const propsLabel = Array.isArray(props.labels) ?
      props.labels[index] : Helpers.evaluateProp(props.labels, datum);
    return datum.label || propsLabel;
  },

  getLabelStyle(labelStyle, dataProps) {
    const { datum, size, style } = dataProps;
    const matchedStyle = pick(style, ["opacity", "fill"]);
    const padding = labelStyle.padding || size * 0.25;
    const baseLabelStyle = defaults({}, labelStyle, matchedStyle, {padding});
    return Helpers.evaluateStyle(baseLabelStyle, datum);
  }
};
