import React from 'react';
import classnames from 'classnames';
import Icon from 'components/ui/icon';

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
  className: React.PropTypes.string,
  onClick: React.PropTypes.func
};
