import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Radio extends React.Component {

  constructor(props) {
    super(props);

    // BINDINGS
    this.onChange = this.onChange.bind(this);
  }

  /**
   * UI EVENTS
   * - onChange
  */
  onChange(e) {
    this.props.onChange(e.currentTarget.value);
  }

  render() {
    const { value, name, label, selected, disabled } = this.props;

    const className = classnames({
      [this.props.className]: !!this.props.className,
      '-disabled': disabled
    });

    return (
      <div className={`c-radio ${className}`}>
        <input
          type="radio"
          name={name}
          id={`radio-${name}-${value}`}
          value={value}
          checked={value === selected}
          disabled={disabled}
          onChange={this.onChange}
        />
        <label htmlFor={`radio-${name}-${value}`}>
          <span />
          {label}
        </label>
      </div>
    );
  }
}

Radio.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  selected: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};
