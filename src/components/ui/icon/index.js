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
    prefix: PropTypes.string
  };

  static defaultProps = {
    className: null,
    prefix: 'icon'
  };

  render() {
    const { prefix, name, className } = this.props;
    const customClass = classnames({ [className]: !!className });

    return (
      <svg styleName="c-icon" className={customClass}>
        <use xlinkHref={`#${prefix}-${name}`} />
      </svg>
    );
  }
}

export default CSSModules(Icon, styles, { allowMultiple: true });
