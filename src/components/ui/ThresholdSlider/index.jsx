import React from 'react';
import { func, number, arrayOf, shape, string } from 'prop-types';
import Slider, { createSliderWithTooltip } from 'rc-slider';

import SliderMarkLabel from './SliderMarkLabel';
import style from './slider_style';

const ThresholdSlider = ({ threshold, onChange, values, defaultValue = 0, unit = '', ranges }) => {
  if (values.length !== 11) throw new Error('ThresholdSlider requires "values" prop to have exactly 11 elements');
  if (ranges.length !== 5) throw new Error('ThresholdSlider requires "ranges" prop to have exactly 5 elements');

  const colors = ranges.map(({ color }) => color);

  const {
    dotStyle,
    handleStyle,
    railStyle,
    trackStyle
  } = style({ colors });

  const min = 0;
  const max = 100;
  const step = 100 / (values.length - 1);


  let sliderDefaultValue = defaultValue;
  const valueDictionary = {};
  values.forEach((v, i) => {
    const sliderValue = i * step;
    if (v === defaultValue) sliderDefaultValue = sliderValue;
    valueDictionary[sliderValue] = v;
  });
  const getActualValue = v => valueDictionary[v];
  const getSliderValue = v => Object.keys(valueDictionary).find(key => valueDictionary[key] === v);

  const marks = {};
  ranges.forEach(({ name, value }, i) => {
    marks[i * 20] = <SliderMarkLabel label={name} range={value} />;
  });

  const tooltipValue = (value) => {
    let prefix = '';
    const actualValue = getActualValue(value);
    if (values.indexOf(actualValue) > 0) {
      prefix = '< ';
    }
    return `${prefix}${actualValue} ${unit}`;
  };

  const handleValueChange = (value) => {
    onChange(getActualValue(value));
  };

  const SliderWithTooltip = createSliderWithTooltip(Slider);

  return (
    <div style={{ marginLeft: 5 }} >
      <SliderWithTooltip
        marks={marks}
        min={min}
        max={max}
        step={step}
        defaultValue={threshold === null ? sliderDefaultValue : getSliderValue(threshold)}
        tipFormatter={tooltipValue}
        dots
        tooltipVisible
        handleStyle={handleStyle}
        trackStyle={trackStyle}
        railStyle={railStyle}
        dotStyle={dotStyle}
        tipProps={{ visible: true }}
        onChange={handleValueChange}
      />
    </div>
  );
};

ThresholdSlider.propTypes = {
  threshold: number,
  onChange: func,
  values: arrayOf(number).isRequired,
  defaultValue: number,
  unit: string,
  ranges: arrayOf(
    shape({
      name: string.isRequired,
      value: string.isRequired,
      color: string.isRequired
    })
  ).isRequired
};

export default ThresholdSlider;
