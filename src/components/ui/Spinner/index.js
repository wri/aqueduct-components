import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';

class Spinner extends PureComponent {
  render() {
    const { isLoading, className, style } = this.props;

    return (
      <div className={classNames('c-spinner', { [className]: !!className, '-loading': isLoading })}>
        <div className="spinner-box" style={style}>
          <div className="icon" />
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

export default Spinner;
