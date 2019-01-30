import React from 'react';
import PropTypes from 'prop-types';
import SimpleSelect from './SimpleSelect';
import SearchSelect from './SearchSelect';

export default function CustomSelect(props) {
  const { search, ...newProps } = props;
  return search ? <SearchSelect {...newProps} /> : <SimpleSelect {...newProps} />;
}

CustomSelect.propTypes = {
  search: PropTypes.bool
};
