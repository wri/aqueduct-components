import React from 'react';
import classnames from 'classnames';

export default function Timeline(props) {
  const { items, selected } = props;
  const classList = classnames('c-timeline', {
    [props.className]: props.className
  });

  return (
    <div className={classList}>
      <ul className="timeline-list">
        {items.map((item, index) => {
          const itemClassList = classnames('timeline-list-item', {
            '-selected': (selected) ? selected.value === item.value : false
          });
          return (
            <li key={index} className={itemClassList} onClick={() => props.onChange && props.onChange(item)}>
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
  onChange: React.PropTypes.func,
  className: React.PropTypes.string
};
