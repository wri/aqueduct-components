import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ZoomControl from '../ZoomControl';

export default function MapControls({ zoom, onZoomChange, zoomControl, className, actions }) {
  return (
    <div className={classNames('c-map-controls', { [className]: !!className })}>
      {zoomControl &&
        <ZoomControl
          zoom={zoom}
          onZoomChange={onZoomChange}
        />}

      {actions &&
        <ul className="map-actions-list">
          {actions.map((action, i) =>
            <li className="map-actions-item" key={i}><action.component {...action.componentProps} /></li>)
          }
        </ul>
      }
    </div>
  );
}

MapControls.defaultProps = {
  zoomControl: true
};

MapControls.propTypes = {
  actions: PropTypes.array,
  className: PropTypes.string,
  onZoomChange: PropTypes.func,
  zoom: PropTypes.number,
  zoomControl: PropTypes.bool
};
