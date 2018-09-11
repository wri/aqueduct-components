/* eslint-disable jsx-a11y/label-has-for */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// styles
import './styles.scss';

class Field extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    customClass: PropTypes.string,
    theme: PropTypes.oneOf(['light', 'dark']),
    children: PropTypes.any.isRequired
  }

  static defaultProps = {
    theme: 'light',
    className: null,
    customClass: null,
    disabled: false
  }

  render() {
    const {
      name,
      label,
      theme,
      className,
      customClass,
      disabled,
      children
    } = this.props;
    const componentClass = classnames(
      `c-field -${theme}`,
      {
        [className]: !!className,
        '-disabled': disabled
      }
    );
    const externalClass = classnames({ [customClass]: !!customClass });

    return (
      <div styleName={componentClass} className={externalClass}>
        <label htmlFor={name}>{label}</label>
        <div styleName="field-container">
          {children}
        </div>
      </div>
    );
  }
}

export default Field;
