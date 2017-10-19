import React from 'react';
import PropTypes from 'prop-types';

import { substitution } from '../../../utils/text';

export default class MapHeader extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: null
    };
  }

  componentWillMount() {
    this.updateText(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.updateText(nextProps);
  }

  updateText(props) {
    const params = this.parseFilters(props.filters);

    this.setState({
      text: props.template ? substitution(props.template, params) : null
    });
  }

  parseFilters(filters) {
    const parsedFilters = [];

    Object.keys(filters).forEach((key) => {
      if (Object.hasOwnProperty.call(this.props.dictionary, key)) {
        parsedFilters.push({
          key,
          value: this.props.dictionary[key](filters[key])
        });
      }
    });

    return parsedFilters;
  }

  render() {
    if (!this.state.text) return null;

    return (
      <div className="c-map-header">
        <span className="title">{this.state.text}</span>
      </div>
    );
  }
}

MapHeader.propTypes = {
  dictionary: PropTypes.object
};
