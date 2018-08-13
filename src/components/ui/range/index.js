import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Range, Handle } from 'rc-slider';
import { Tooltip } from 'wri-api-components';

// styles
import 'wri-api-components/dist/components.css';
import './styles.scss';

export class CustomRange extends PureComponent {
  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    defaultValue: PropTypes.array,
    theme: PropTypes.string,
    customClass: PropTypes.string,
    disabled: PropTypes.bool,
    formatValue: PropTypes.func
  }

  static defaultProps = {
    defaultValue: null,
    theme: 'light',
    disabled: false,
    customClass: null,
    formatValue: null
  }

  renderHandle = (handleProps) => {
    const { theme, formatValue, disabled } = this.props;
    const componentClass = classnames(
      `c-rc-tooltip -default range-tooltip -${theme}`,
      { '-disabled': !!disabled }
    );
    const { className } = handleProps;
    const { value, dragging, ...restHandleProps } = handleProps;
    const formattedValue = !!formatValue &&
      typeof formatValue === 'function' ? formatValue(value) : value;
    const key = className.split(' ')[1];

    return (
      <Tooltip
        key={key}
        overlay={formattedValue}
        overlayClassName={componentClass}
        placement="top"
        visible
        dragging={dragging}
      >
        <Handle value={value} {...restHandleProps} />
      </Tooltip>
    );
  };

  render() {
    const {
      defaultValue,
      theme,
      customClass,
      ...rangeProps
    } = this.props;
    const componentClass = classnames(
      `c-range -${theme}`,
      {
        [customClass]: !!customClass,
        '-disabled': !!this.props.disabled
      }
    );
    const calculatedDefaultValue = defaultValue || [this.props.min, this.props.min + 1];

    return (
      <Range
        {...rangeProps}
        className={componentClass}
        defaultValue={calculatedDefaultValue}
        handle={this.renderHandle}
      />
    );
  }
}

export default CustomRange;
