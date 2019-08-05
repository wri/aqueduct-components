import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';

export default function HeaderToolsMenu({ active, currentApp }) {
  return (
    <div className={`c-header-submenu ${active && '-active'}`}>
      <a
        className={classnames('item', { '-active': currentApp === 'water-and-food-security-analyzer' })}
        // disabled temporary until URL is available
        // href="http://wri.org/applications/aqueduct/water-food-security/"
        href="https://wri.org/aqueduct"
      >
        <Icon className="c-big" name="icon-plus" />
        <span>Water and Food Security Analyzer</span>
      </a>
      <a
        className={classnames('item', { '-active': currentApp === 'water-risk-atlas' })}
        href="https://wri.org/applications/aqueduct/water-risk-atlas"
      >
        <Icon className="c-big" name="icon-plus" />
        <span>Risk Atlas</span>
      </a>
      <a
        className={classnames('item', { '-active': currentApp === 'flood-risk-analyzer' })}
        // disabled temporary until URL is available
        // href="https://wri.org/applications/aqueduct/flood"
        href="https://wri.org/aqueduct"
      >
        <Icon className="c-big" name="icon-plus" />
        <span>Flood Risk Analyzer</span>
      </a>
      <a
        className={classnames('item', { '-active': currentApp === 'country-basin-risk-profiles-and-rankings' })}
        href="https://wri.org/applications/aqueduct/country-rankings"
      >
        <Icon className="c-big" name="icon-plus" />
        <span>Country basin risk profiles and Rankings</span>
      </a>
    </div>
  );
}

HeaderToolsMenu.propTypes = {
  active: PropTypes.bool,
  currentApp: PropTypes.string.isRequired
};
