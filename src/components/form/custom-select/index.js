import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';

// components
import Select from 'react-select';

// styles
import styles from './styles.scss';

// https://react-select.com/home
export class CustomSelect extends PureComponent {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired
    })).isRequired,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    isDisabled: PropTypes.bool,
    className: PropTypes.string,
    customClass: PropTypes.string,
    theme: PropTypes.oneOf(['light', 'dark'])
  }

  static defaultProps = {
    defaultValue: null,
    value: null,
    isDisabled: false,
    className: null,
    customClass: null,
    theme: 'light'
  }

  render() {
    const { className, customClass, theme, isDisabled } = this.props;
    const componentClass = classnames(
      `c-select -${theme}`,
      {
        [className]: !!className,
        '-disabled': !!isDisabled
      }
    );
    const externalClass = classnames({ [customClass]: !!customClass });
    const { value, ...selectProps } = this.props;
    const defaultValueObject = this.props.options.find(option =>
      option.value === this.props.defaultValue);
    const valueObject = value ? this.props.options.find(option =>
      option.value === value) || '' : '';

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

export default CSSModules(CustomSelect, styles, { allowMultiple: true });
