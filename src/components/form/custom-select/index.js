import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import Select from 'react-select';

// styles
import './styles.scss';

// https://react-select.com/home
class CustomSelect extends PureComponent {
  static propTypes = {
    options: PropTypes.array.isRequired,
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    isDisabled: PropTypes.bool,
    grouped: PropTypes.bool,
    className: PropTypes.string,
    customClass: PropTypes.string,
    theme: PropTypes.oneOf(['light', 'dark'])
  }

  static defaultProps = {
    defaultValue: null,
    value: null,
    isDisabled: false,
    grouped: false,
    className: null,
    customClass: null,
    theme: 'light'
  }

  render() {
    const { className, customClass, theme, isDisabled, grouped } = this.props;
    const componentClass = classnames(
      `c-select -${theme}`,
      {
        [className]: !!className,
        '-disabled': !!isDisabled
      }
    );
    const externalClass = classnames({ [customClass]: !!customClass });
    const { value, ...selectProps } = this.props;
    let valueObject = '';

    const defaultValueObject = (this.props.options.options || this.props.options).find((option) => {
      if (option.options) return option.options.find(opt => opt.value === this.props.defaultValue);
      return option.value === this.props.defaultValue;
    });

    if (!grouped) {
      valueObject = value ? this.props.options.find(option => (option.value === value) || '') : '';
    } else {
      this.props.options.forEach((option) => {
        const found = (option.options || []).find(opt => opt.value === value);
        if (found) valueObject = found;
      });
    }


    return (
      <div styleName={componentClass} className={externalClass}>
        <Select
          {...selectProps}
          value={valueObject}
          defaultValue={defaultValueObject}
          classNamePrefix="aq__react-select"
        />
      </div>
    );
  }
}

export default CustomSelect;
