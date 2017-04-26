import React from 'react';
import PropTypes from 'prop-types';

import isEqual from 'lodash/isEqual';
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

  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props.filters, nextProps.filters);
  }

  updateText(props) {
    const params = this.parseFilters(props.filters);

    this.setState({
      text: substitution(props.template, params)
    });
  }

  parseFilters(filters) {
    const parsedFilters = [];

    Object.keys(filters).forEach((key) => {
      if (Object.hasOwnProperty.call(this.props.dictionary, key)) {
        parsedFilters.push({ key, value: this.props.dictionary[key](filters[key]) });
      }
    });

    return parsedFilters;
  }

  render() {
    return (
      <div className="c-map-header">
        {this.state.text &&
          <span className="title">{this.state.text}</span>
        }
      </div>
    );
  }
}

MapHeader.propTypes = {
  dictionary: PropTypes.object,
  filters: PropTypes.object
};
