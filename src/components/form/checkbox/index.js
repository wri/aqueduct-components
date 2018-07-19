/* eslint-disable jsx-a11y/label-has-for */
// Usually a label tag contains an input. For checkbox case, it's the
// opposite that's why the rule is disabled exceptionally

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';

// components
import Icon from 'components/ui/icon';

// styles
import styles from './styles.scss';

class Checkbox extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
  }

  static defaultProps = {
    defaultChecked: false,
    disabled: false,
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
      className
    } = this.props;

    const componentClass = classnames(
      'c-checkbox',
      {
        [className]: !!className,
        '-disabled': disabled
      }
    );

    return (
      <div styleName={componentClass}>
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
          <span>
            <Icon name="checkbox" />
          </span>
          {label}
        </label>
      </div>
    );
  }
}

export default CSSModules(Checkbox, styles, { allowMultiple: true });
