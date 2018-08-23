import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// styles
import './styles.scss';

class TooltipSlider extends PureComponent {
  static propTypes = {
    theme: PropTypes.string,
    customClass: PropTypes.string,
    disabled: PropTypes.bool,
    offset: PropTypes.number,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    children: PropTypes.node.isRequired
  }

  static defaultProps = {
    theme: 'light',
    disabled: false,
    offset: 0,
    customClass: null
  }

  render() {
    const {
      value,
      offset,
      theme,
      disabled,
      customClass
    } = this.props;

    const componentClass = classnames(
      `c-tooltip-slider -${theme}`,
      { '-disabled': disabled }
    );

    return (
      <div
        styleName={componentClass}
        className={customClass}
      >
        <span
          styleName="tooltip-value-container"
          style={{ left: `${offset}%` }}
        >
          {value}
        </span>
        {this.props.children}
      </div>
    );
  }
}

export default TooltipSlider;
