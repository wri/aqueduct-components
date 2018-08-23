/* eslint-disable jsx-a11y/label-has-for */
// Usually a label tag contains an input. For checkbox case, it's the
// opposite that's why the rule is disabled exceptionally

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import Icon from 'components/ui/icon';

// styles
import './styles.scss';

class Checkbox extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    theme: PropTypes.oneOf(['light', 'dark']),
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
  }

  static defaultProps = {
    defaultChecked: false,
    disabled: false,
    theme: 'dark',
    className: null,
    onChange: null
  }

  onChange = (evt) => {
    const { label, value } = this.props;

    if (this.props.onChange) {
      this.props.onChange({
        label,
        value,
        checked: evt.currentTarget.checked
      });
    }
  }

  render() {
    const {
      value,
      name,
      label,
      defaultChecked,
      disabled,
      theme,
      className
    } = this.props;

    const componentClass = classnames(
      `c-checkbox -${theme}`,
      { '-disabled': disabled }
    );
    const customClass = classnames({ [className]: !!className });

    return (
      <div styleName={componentClass} className={customClass}>
        <input
          type="checkbox"
          name={name}
          id={`checkbox-${name}-${value}`}
          value={value}
          disabled={disabled}
          defaultChecked={defaultChecked}
          onChange={this.onChange}
        />
        <label htmlFor={`checkbox-${name}-${value}`}>
          <span styleName="checkbox-label-fake"><Icon name="checkbox" /></span>
          <span styleName="checkbox-label">{label}</span>
        </label>
      </div>
    );
  }
}

export default Checkbox;
