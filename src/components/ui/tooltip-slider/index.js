import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import Slider, { Handle } from 'rc-slider';

// styles
import styles from './styles.scss';

export class TooltipSlider extends PureComponent {
  static propTypes = {
    theme: PropTypes.string,
    customClass: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.number.isRequired
  }

  static defaultProps = {
    theme: 'light',
    disabled: false,
    customClass: null
  }

  render() {
    const {
      value,
      offset,
      theme,
      customClass
    } = this.props;
    const componentClass = classnames(
      `c-slider -${theme}`,
      {
        [customClass]: !!customClass,
        '-disabled': !!this.props.disabled
      }
    );

    return (
      <div styleName="c-tooltip-slider">
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

export default CSSModules(TooltipSlider, styles, { allowMultiple: true });
