import React from 'react';
import { string, shape, func, arrayOf, bool } from 'prop-types';
import classnames from 'classnames';

export default function ButtonMenu(props) {
  const cNames = classnames('c-btn-menu', props.className);
  const btnClassNames = item => classnames('btn-menu-btn', { '-disabled': item.disabled });

  return (
    <ul className={cNames}>
      {props.items.map((item, index) => (
        <li className={classnames('btn-menu-item', { '-active': item.active })} key={item.key || index}>
          <button
            className={btnClassNames(item)}
            type="button"
            onClick={() => item.cb && item.cb(item)}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
}

ButtonMenu.propTypes = {
  items: arrayOf(shape({
    disabled: bool,
    active: bool,
    cd: func,
    key: string
  })),
  className: string
};
