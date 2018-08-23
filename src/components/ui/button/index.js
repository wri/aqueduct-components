import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// styles
import './styles.scss';

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
    theme: null,
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
    const componentClass = classnames(
      `c-button ${theme ? `-${theme}` : ''}`,
      { [className]: !!className }
    );
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

export default Button;
