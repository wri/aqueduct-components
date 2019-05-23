import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Tooltip from 'rc-tooltip';

class Timeline extends PureComponent {
  render() {
    const {
      items,
      selected,
      onChange,
      className,
      disabled,
      tooltipProps
    } = this.props;

    const { overlay, ...restTooltipProps } = tooltipProps;

    const classList = classnames('c-timeline', {
      [className]: className,
      '-disabled': disabled
    });

    return (
      <div className={classList}>
        <ul className="timeline-list">
          {items.map((item) => {
            const itemClassList = classnames('timeline-list-item', {
              '-selected': selected && (selected.value === item.value),
              '-disabled': item.disabled
            });

            if (Object.keys(tooltipProps).length) {
              return (
                <Tooltip
                  key={item.value}
                  {...restTooltipProps}
                  {...overlay && { overlay: overlay(item) }}
                >
                  <li
                    key={item.value}
                    className={itemClassList}
                    onClick={() => !disabled && onChange && onChange(item)}
                  >
                    {item.label && (
                      <div className="timeline-label">
                        {item.label}
                      </div>)}
                  </li>
                </Tooltip>
              );
            }

            return (
              <li
                key={item.value}
                className={itemClassList}
                onClick={() => !disabled && onChange && onChange(item)}
              >
                <div className="timeline-label">
                  {item.label}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Timeline;


Timeline.propTypes = {
  items: PropTypes.array.isRequired,
  selected: PropTypes.any.isRequired,
  tooltipProps: PropTypes.object,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string
};

Timeline.defaultProps = {
  className: null,
  onChange: null,
  disabled: false,
  tooltipProps: {}
};
