import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

export default function HeaderToolsMenu(props) {
  return (
    <div className={`c-header-submenu ${props.active && '-active'}`}>
      <a className="item -active" href="#outside">
        <Icon className="c-big" name="icon-plus" />
        <span>Flood Risk Analyzer</span>
      </a>
      <a className="item" href="#outside">
        <Icon className="c-big" name="icon-plus" />
        <span>Risk Atlas</span>
      </a>
      <a className="item" href="#outside">
        <Icon className="c-big" name="icon-plus" />
        <span>Country basin risk profiles and Rankings</span>
      </a>
      <a className="item" href="#outside">
        <Icon className="c-big" name="icon-plus" />
        <span>Supply Chain Water Risk Assesment</span>
      </a>
      <a className="item" href="#outside">
        <Icon className="c-big" name="icon-plus" />
        <span>Water and Food Security Analyzer</span>
      </a>
    </div>
  );
}

HeaderToolsMenu.propTypes = {
  // ACTIONS
  active: PropTypes.bool
};
