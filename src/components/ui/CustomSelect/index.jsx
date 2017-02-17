import React from 'react';
import SimpleSelect from './SimpleSelect';
import SearchSelect from './SearchSelect';

export default function CustomSelect(props) {
  const { search, ...newProps } = props;
  return search ? <SearchSelect {...newProps} /> : <SimpleSelect {...newProps} />;
}

CustomSelect.propTypes = {
  search: React.PropTypes.bool
};
