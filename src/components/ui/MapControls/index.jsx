import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ZoomControl from '../ZoomControl';

export default function MapControls({ zoom, onZoomChange, zoomControl, className, children }) {
  const _children = (Array.isArray(children) || !children) ? children : [children];
  return (
    <div className={classNames('c-map-controls', { [className]: !!className })}>
      {zoomControl &&
        <ZoomControl
          zoom={zoom}
          onZoomChange={onZoomChange}
        />}

      {_children &&
        <ul className="map-actions-list">
          {_children.map((c, i) => <li className="map-actions-item" key={i}>{c}</li>)}
        </ul>
      }
    </div>
  );
}

MapControls.defaultProps = {
  zoomControl: true
};

MapControls.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  onZoomChange: PropTypes.func,
  zoom: PropTypes.number,
  zoomControl: PropTypes.bool
};
