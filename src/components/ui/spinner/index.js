import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// styles
import './styles.scss';

class Spinner extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    customClass: PropTypes.string,
    style: PropTypes.object
  }

  static defaultProps = {
    className: null,
    customClass: null,
    style: {}
  }

  render() {
    const { className, customClass, style } = this.props;
    const componentClass = classnames(
      'c-spinner',
      { [className]: !!className }
    );
    const externalClass = classnames({ [customClass]: !!customClass });

    return (
      <div styleName={componentClass} className={externalClass}>
        <div styleName="spinner-box" style={style}>
          <div styleName="icon" />
        </div>
      </div>
    );
  }
}

export default Spinner;
