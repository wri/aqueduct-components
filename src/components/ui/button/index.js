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
    type: PropTypes.string,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    className: null,
    customClass: null,
    theme: null,
    type: 'button',
    disabled: false
  };

  render() {
    const {
      className,
      children,
      customClass,
      theme,
      disabled,
      ...buttonProps
    } = this.props;
    const componentClass = classnames(
      `c-button ${theme ? `-${theme}` : ''}`,
      {
        [className]: !!className,
        '-disabled': disabled
      }
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
