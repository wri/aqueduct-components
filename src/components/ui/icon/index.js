import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';

// styles
import styles from './styles.scss';

export class Icon extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    customClass: PropTypes.string,
    prefix: PropTypes.string
  };

  static defaultProps = {
    className: null,
    customClass: null,
    prefix: 'icon'
  };

  render() {
    const { prefix, name, className, customClass } = this.props;
    const componentClass = classnames('c-icon', { [className]: !!className });
    const externalClass = classnames({ [customClass]: !!customClass });

    return (
      <svg styleName={componentClass} className={externalClass}>
        <use xlinkHref={`#${prefix}-${name}`} />
      </svg>
    );
  }
}

export default CSSModules(Icon, styles, { allowMultiple: true });
