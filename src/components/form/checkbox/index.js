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
    theme: PropTypes.oneOf(['light', 'dark']),
    className: PropTypes.string,
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
  }

  static defaultProps = {
    disabled: false,
    theme: 'dark',
    className: null,
    onChange: null
  }

  onChange = (evt) => {
    const { label } = this.props;

    if (this.props.onChange) {
      this.props.onChange({
        label,
        checked: evt.currentTarget.checked
      });
    }
  }

  render() {
    const {
      name,
      label,
      disabled,
      checked,
      theme,
      className
    } = this.props;

    const componentClass = classnames(
      `c-checkbox -${theme}`,
      { '-disabled': disabled }
    );
    const customClass = classnames({ [className]: !!className });

    return (
      <div
        styleName={componentClass}
        className={customClass}
      >
        <input
          type="checkbox"
          name={name}
          id={`checkbox-${name}`}
          checked={checked}
          disabled={disabled}
          onChange={this.onChange}
        />
        <label htmlFor={`checkbox-${name}`}>
          <span styleName="checkbox-label-fake"><Icon name="checkbox" /></span>
          <span styleName="checkbox-label">{label}</span>
        </label>
      </div>
    );
  }
}

export default Checkbox;
