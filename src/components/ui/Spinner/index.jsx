import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Spinner({ isLoading, className, style }) {
  return (
    <div className={classNames('c-spinner', { [className]: !!className, '-loading': isLoading })}>
      <div className="spinner-box" style={style}>
        <div className="icon" />
      </div>
    </div>
  );
}

Spinner.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  style: PropTypes.object
};
