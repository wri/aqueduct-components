import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';

export default function ShareButton(props) {
  const className = classnames({
    [props.className]: !!props.className
  });

  return (
    <button
      className={className}
      type="button"
      onClick={props.onClick}
    >
      <Icon name="icon-share" />
    </button>
  );
}

ShareButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};
