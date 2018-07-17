import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import CSSModules from 'react-css-modules';
import styles from './styles.scss';

export class Spinner extends PureComponent {
  render() {
    const { isLoading, className, style } = this.props;
    const componentClass = classNames('', { [className]: !!className, '-loading': isLoading });

    return (
      <div styleName={`c-spinner ${componentClass}`}>
        <div styleName="spinner-box" style={style}>
          <div styleName="icon" />
        </div>
      </div>
    );
  }
}

Spinner.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  style: PropTypes.object
};

export default CSSModules(Spinner, styles, { allowMultiple: true });
