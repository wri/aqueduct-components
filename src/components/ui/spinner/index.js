import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';

// styles
import styles from './styles.scss';

class Spinner extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
  }

  static defaultProps = {
    className: null,
    style: null
  }

  render() {
    const { className, style } = this.props;
    const componentClass = classNames(
      'c-spinner',
      { [className]: !!className }
    );

    return (
      <div styleName={componentClass}>
        <div styleName="spinner-box" style={style}>
          <div styleName="icon" />
        </div>
      </div>
    );
  }
}

export default CSSModules(Spinner, styles, { allowMultiple: true });
