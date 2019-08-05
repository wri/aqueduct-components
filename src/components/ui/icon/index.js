import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// styles
import './styles.scss';

class Icon extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    customClass: PropTypes.string,
    theme: PropTypes.string,
    prefix: PropTypes.string
  };

  static defaultProps = {
    className: null,
    customClass: null,
    theme: 'none',
    prefix: 'icon'
  };

  render() {
    const { prefix, name, theme, className, customClass } = this.props;
    const componentClass = classnames(
      `c-icon -${theme}`,
      { [className]: !!className }
    );
    const externalClass = classnames({ [customClass]: !!customClass });

    return (
      <svg styleName={componentClass} className={externalClass}>
        <use xlinkHref={`#${prefix}-${name}`} />
      </svg>
    );
  }
}

export default Icon;
