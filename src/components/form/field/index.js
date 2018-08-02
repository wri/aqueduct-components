/* eslint-disable jsx-a11y/label-has-for */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';

// styles
import styles from './styles.scss';

export class Field extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    customClass: PropTypes.string,
    theme: PropTypes.oneOf(['light', 'dark']),
    children: PropTypes.any.isRequired
  }

  static defaultProps = {
    theme: 'light',
    className: null,
    customClass: null
  }

  render() {
    const {
      name,
      label,
      theme,
      className,
      customClass,
      children
    } = this.props;
    const componentClass = classnames(
      `c-field -${theme}`,
      { [className]: !!className }
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

export default CSSModules(Field, styles, { allowMultiple: true });
