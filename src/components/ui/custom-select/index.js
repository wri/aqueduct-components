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
    className: PropTypes.string,
    theme: PropTypes.string
  }

  static defaultProps = {
    className: null,
    theme: 'light'
  }

  render() {
    const { className, theme } = this.props;
    const componentClass = `c-select -${theme}`;
    const customClass = classnames({ [className]: !!className });

    return (
      <div styleName={componentClass} className={customClass}>
        <Select
          {...this.props}
          classNamePrefix="aq__react-select"
        />
      </div>
    );
  }
}

export default CSSModules(CustomSelect, styles, { allowMultiple: true });
