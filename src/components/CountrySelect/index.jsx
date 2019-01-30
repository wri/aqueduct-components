import React from 'react';
import PropTypes from 'prop-types';
import CustomSelect from '../ui/CustomSelect';

export default function CountrySelect(props) {
  const countryList = props.countries.list.map(item => ({ value: item.id, label: item.name }));

  let parsedProps = {
    options: countryList,
    placeholder: props.placeholder || 'Select a Country',
    search: true
  };

  // Include all other CustomSelect props
  parsedProps = Object.assign({}, props, parsedProps);

  return <CustomSelect {...parsedProps} />;
}

CountrySelect.propTypes = {
  countries: PropTypes.object,
  placeholder: PropTypes.string
};
