import React from 'react';
import classnames from 'classnames';

export default function Timeline(props) {
  const { items, selected } = props;

  const classList = classnames('c-timeline', {
    [props.className]: props.className,
    '-disabled': props.disabled
  });

  return (
    <div className={classList}>
      <ul className="timeline-list">
        {items.map((item) => {
          const itemClassList = classnames('timeline-list-item', {
            '-selected': (selected) ? selected.value === item.value : false
          });

          return (
            <li
              key={item.value}
              className={itemClassList}
              onClick={() => !props.disabled && props.onChange && props.onChange(item)}
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

Timeline.propTypes = {
  items: React.PropTypes.array.isRequired,
  selected: React.PropTypes.any.isRequired,
  disabled: React.PropTypes.bool,
  onChange: React.PropTypes.func,
  className: React.PropTypes.string
};
