import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import classnames from 'classnames';

export default class Checkbox extends React.Component {

  constructor(props) {
    super(props);

    // BINDINGS
    this.onChange = this.onChange.bind(this);
  }

  /**
   * UI EVENTS
   * - onChange
  */
  onChange(evt) {
    this.props.onChange && this.props.onChange({ value: this.props.value, checked: evt.currentTarget.checked });
  }

  render() {
    const { value, name, label, checked, defaultChecked, disabled } = this.props;

    const className = classnames({
      [this.props.className]: !!this.props.className,
      '-disabled': disabled
    });

    return (
      <div className={`c-checkbox ${className}`}>
        <input
          type="checkbox"
          name={name}
          id={`checkbox-${name}-${value}`}
          value={value}
          disabled={disabled}
          defaultChecked={defaultChecked}
          checked={checked}
          onChange={this.onChange}
        />
        <label htmlFor={`checkbox-${name}-${value}`}>
          <span>
            <Icon name="icon-checkbox" />
          </span>
          {label}
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};
