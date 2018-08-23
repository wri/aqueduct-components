import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// styles
import './styles.scss';

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
    const customClass = classnames({ [className]: !!className });

    return (
      <div styleName="c-spinner" className={customClass}>
        <div styleName="spinner-box" style={style}>
          <div styleName="icon" />
        </div>
      </div>
    );
  }
}

export default Spinner;
