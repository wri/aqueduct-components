import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';

// styles
import styles from './styles.scss';

export class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    customClass: PropTypes.string,
    theme: PropTypes.string,
    type: PropTypes.string
  };

  static defaultProps = {
    className: null,
    customClass: null,
    theme: 'dark',
    type: 'button'
  };

  render() {
    const {
      className,
      children,
      customClass,
      theme,
      ...buttonProps
    } = this.props;
    const componentClass = classnames(`c-button -${theme}`, { [className]: !!className });
    const externalClass = classnames({ [customClass]: !!customClass });

    return (
      <button
        styleName={componentClass}
        className={externalClass}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }
}

export default CSSModules(Button, styles, { allowMultiple: true });
