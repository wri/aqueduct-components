import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class SegmentedUi extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected || null
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected && (nextProps.selected !== this.state.selected)) {
      this.setState({
        selected: nextProps.selected
      });
    }
  }

  onChange(item) {
    this.setState({
      selected: item.value
    });
    this.props.onChange && this.props.onChange(item);
  }

  getItems() {
    return this.props.items.map((item, index) => {
      const cNames = classNames('segmented-ui-item', {
        '-active': item.value === this.state.selected
      });
      return (
        <li key={index} className={cNames}>
          <button type="button" className="segmented-ui-btn" onClick={() => { this.onChange(item); }}>{item.label}</button>
        </li>
      );
    });
  }

  render() {
    const cNames = classNames('c-segmented-ui', {
      [this.props.className]: this.props.className
    });
    return (
      <ul className={cNames}>
        {this.getItems()}
      </ul>
    );
  }
}

SegmentedUi.propTypes = {
  items: PropTypes.array,
  selected: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func
};
