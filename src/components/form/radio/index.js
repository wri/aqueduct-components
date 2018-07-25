/* eslint-disable jsx-a11y/label-has-for */
// Usually a label tag contains an input. For radio case, it's the
// opposite that's why the rule is disabled exceptionally

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';

// styles
import styles from './styles.scss';

export class Radio extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    theme: PropTypes.oneOf(['light', 'dark']),
    className: PropTypes.string,
    customClass: PropTypes.string,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func
  }

  static defaultProps = {
    disabled: false,
    checked: false,
    theme: 'light',
    className: null,
    customClass: null,
    onChange: null
  }

  onChange = (evt) => {
    const { label, value, name } = this.props;
    if (this.props.onChange) {
      this.props.onChange({
        label,
        value,
        name,
        checked: evt.currentTarget.checked
      });
    }
  }

  render() {
    const {
      value,
      name,
      label,
      checked,
      theme,
      className,
      customClass,
      disabled
    } = this.props;
    const componentClass = classnames(
      `c-radio -${theme}`,
      {
        '-disabled': disabled,
        [className]: !!className
      }
    );
    const externalClass = classnames({ [customClass]: !!customClass });

    return (
      <div styleName={componentClass} className={externalClass}>
        <input
          type="radio"
          name={name}
          id={`radio-${name}-${value}`}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={this.onChange}
        />
        <label htmlFor={`radio-${name}-${value}`}>
          <span styleName="radio-label-fake" />
          <span styleName="radio-label">{label}</span>
        </label>
      </div>
    );
  }
}

export default CSSModules(Radio, styles, { allowMultiple: true });
