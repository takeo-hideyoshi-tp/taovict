import { assign, orderBy } from "lodash";
import { Helpers, LabelHelpers, Scale, Domain, Data, Collection } from "victory-core";

const getErrors = (datum, scale, axis) => {
  /**
   * check if it is asymmetric error or symmetric error, asymmetric error should be an array
   * and the first value is the positive error, the second is the negative error
   * @param  {Boolean} isArray(errorX)
   * @return {String or Array}
   */

  const errorNames = { x: "errorX", y: "errorY" };
  const errors = datum[errorNames[axis]];
  if (errors === 0) {
    return false;
  }

  return Array.isArray(errors) ?
    [ errors[0] === 0 ? false : scale[axis](errors[0] + datum[`_${axis}`]),
      errors[1] === 0 ? false : scale[axis](datum[`_${axis}`] - errors[1]) ] :
    [ scale[axis](errors + datum[`_${axis}`]), scale[axis](datum[`_${axis}`] - errors) ];
};

const sortData = (dataset, sortKey, sortOrder = "ascending") => {
  if (!sortKey) {
    return dataset;
  }

  if (sortKey === "x" || sortKey === "y") {
    sortKey = `_${sortKey}`;
  }

  const sortedData = orderBy(dataset, sortKey);

  if (sortOrder === "descending") {
    return sortedData.reverse();
  }

  return sortedData;
};

const formatErrorData = (dataset, props) => {
  if (!dataset || Data.getLength(dataset) < 1) {
    return [];
  }
  const accessor = {
    x: Helpers.createAccessor(props.x !== undefined ? props.x : "x"),
    y: Helpers.createAccessor(props.y !== undefined ? props.y : "y"),
    errorX: Helpers.createAccessor(props.errorX !== undefined ? props.errorX : "errorX"),
    errorY: Helpers.createAccessor(props.errorY !== undefined ? props.errorY : "errorY")
  };

  const replaceNegatives = (errors) => {
    // check if the value is negative, if it is set to 0
    const replaceNeg = (val) => !val || val < 0 ? 0 : val;
    return Array.isArray(errors) ? errors.map((err) => replaceNeg(err)) : replaceNeg(errors);
  };

  const stringMap = {
    x: Data.createStringMap(props, "x"),
    y: Data.createStringMap(props, "y")
  };

  const formattedData = dataset.reduce((dataArr, datum, index) => {
    datum = Data.parseDatum(datum);

    const evaluatedX = accessor.x(datum);
    const evaluatedY = accessor.y(datum);
    const _x = evaluatedX !== undefined ? evaluatedX : index;
    const _y = evaluatedY !== undefined ? evaluatedY : datum;
    const errorX = replaceNegatives(accessor.errorX(datum));
    const errorY = replaceNegatives(accessor.errorY(datum));

    dataArr.push(
      assign(
        {},
        datum,
        { _x, _y, errorX, errorY },
        // map string data to numeric values, and add names
        typeof _x === "string" ? { _x: stringMap.x[_x], x: _x } : {},
        typeof _y === "string" ? { _y: stringMap.y[_y], y: _y } : {}
      )
    );

    return dataArr;
  }, []);

  return sortData(formattedData, props.sortKey, props.sortOrder);
};

const getErrorData = (props) => {
  if (props.data) {
    if (Data.getLength(props.data) < 1) {
      return [];
    }

    return formatErrorData(props.data, props);
  } else {
    const generatedData = (props.errorX || props.errorY) && Data.generateData(props);
    return formatErrorData(generatedData, props);
  }
};

const getDomainFromData = (props, axis, dataset) => {
  const minDomain = Domain.getMinFromProps(props, axis);
  const maxDomain = Domain.getMaxFromProps(props, axis);
  const currentAxis = Helpers.getCurrentAxis(axis, props.horizontal);
  const error = currentAxis === "x" ? "errorX" : "errorY";
  const reduceErrorData = (type) => {
    const baseCondition = type === "min" ? Infinity : -Infinity;
    const errorIndex = type === "min" ? 1 : 0;
    const sign = type === "min" ? -1 : 1;
    return dataset.reduce((memo, datum) => {
      const currentError = Array.isArray(datum[error]) ? datum[error][errorIndex] : datum[error];
      const current = datum[`_${currentAxis}`] + sign * currentError;
      return (memo < current && type === "min") || (memo > current && type === "max") ?
        memo : current;
    }, baseCondition);
  };

  const min = minDomain !== undefined ? minDomain : reduceErrorData("min");
  const max = maxDomain !== undefined ? maxDomain : reduceErrorData("max");
  return Domain.getDomainFromMinMax(min, max);
};

// eslint-disable-next-line max-statements
const getDomain = (props, axis) => {
  const minDomain = Domain.getMinFromProps(props, axis);
  const maxDomain = Domain.getMaxFromProps(props, axis);
  const formatDomain = (domain) => {
    return Domain.cleanDomain(Domain.padDomain(domain, props, axis), props, axis);
  };
  const propsDomain = Domain.getDomainFromProps(props, axis);
  if (propsDomain || minDomain !== undefined && maxDomain !== undefined) {
    return formatDomain(propsDomain || Domain.getDomainFromMinMax(minDomain, maxDomain));
  }
  const categoryDomain = Domain.getDomainFromCategories(props, axis);
  if (categoryDomain) {
    return formatDomain(categoryDomain);
  }
  const dataset = getErrorData(props);
  if (dataset.length < 1) {
    const scaleDomain = Scale.getBaseScale(props, axis).domain();
    const min = minDomain !== undefined ? minDomain : Collection.getMinValue(scaleDomain);
    const max = maxDomain !== undefined ? maxDomain : Collection.getMaxValue(scaleDomain);
    return formatDomain(Domain.getDomainFromMinMax(min, max));
  }

  return formatDomain(getDomainFromData(props, axis, dataset));
};

const getCalculatedValues = (props) => {
  const defaultStyles = props.theme && props.theme.errorbar && props.theme.errorbar.style ?
    props.theme.errorbar.style : {};
  const style = Helpers.getStyles(props.style, defaultStyles) || {};
  const dataWithErrors = assign(Data.getData(props), getErrorData(props));
  const data = Data.addEventKeys(props, dataWithErrors);
  const range = {
    x: Helpers.getRange(props, "x"),
    y: Helpers.getRange(props, "y")
  };
  const domain = {
    x: getDomain(props, "x"),
    y: getDomain(props, "y")
  };
  const scale = {
    x: Scale.getBaseScale(props, "x").domain(domain.x).range(range.x),
    y: Scale.getBaseScale(props, "y").domain(domain.y).range(range.y)
  };
  const origin = props.polar ? props.origin || Helpers.getPolarOrigin(props) : undefined;
  return { domain, data, scale, style, origin };
};

const getLabelProps = (dataProps, text, style) => {
  const { x, index, scale, errorY } = dataProps;
  const error = errorY && Array.isArray(errorY) ? errorY[0] : errorY;
  const y = error || dataProps.y;
  const labelStyle = style.labels || {};
  return {
    style: labelStyle,
    y: y - (labelStyle.padding || 0),
    x,
    text,
    index,
    scale,
    datum: dataProps.datum,
    data: dataProps.data,
    textAnchor: labelStyle.textAnchor,
    verticalAnchor: labelStyle.verticalAnchor || "end",
    angle: labelStyle.angle
  };
};

const getBaseProps = (props, fallbackProps) => {
  props = Helpers.modifyProps(props, fallbackProps, "errorbar");
  const { data, style, scale, domain, origin } = getCalculatedValues(props, fallbackProps);
  const {
    groupComponent, height, width, borderWidth, standalone, theme, polar, padding,
    labels, events, sharedEvents
  } = props;
  const initialChildProps = { parent: {
    domain, scale, data, height, width, standalone, theme, polar, origin,
    padding, style: style.parent
  } };

  return data.reduce((childProps, datum, index) => {
    const eventKey = datum.eventKey || index;
    const x = scale.x(datum._x1 !== undefined ? datum._x1 : datum._x);
    const y = scale.y(datum._y1 !== undefined ? datum._y1 : datum._y);

    const dataProps = {
      x, y, scale, datum, data, index, groupComponent, borderWidth,
      style: style.data,
      errorX: getErrors(datum, scale, "x"),
      errorY: getErrors(datum, scale, "y")
    };

    childProps[eventKey] = {
      data: dataProps
    };
    const text = LabelHelpers.getText(props, datum, index);
    if (text !== undefined && text !== null || (labels && (events || sharedEvents))) {
      childProps[eventKey].labels = getLabelProps(dataProps, text, style);
    }

    return childProps;
  }, initialChildProps);
};

export { getBaseProps, getDomain };
