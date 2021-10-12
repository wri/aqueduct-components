import React from 'react';
import { string } from 'prop-types';

const SliderMarkLabel = ({ label, range }) => {
  const labelStyle = {
    display: 'block',
    marginTop: 20,
    fontSize: 14,
    fontWeight: 500,
    color: 'white'
  };
  const rangeStyle = {
    ...labelStyle,
    fontWeight: 'normal'
  };
  return (
    <div >
      <span style={labelStyle}>{label}</span>
      <span style={rangeStyle}>{range}</span>
    </div>
  );
};

SliderMarkLabel.propTypes = {
  label: string.isRequired,
  range: string.isRequired
};

export default SliderMarkLabel;
