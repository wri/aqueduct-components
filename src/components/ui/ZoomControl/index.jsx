import React from 'react';
import classnames from 'classnames';

export default class ZoomControl extends React.Component {

  constructor(props) {
    super(props);

    // Bindings
    this.increaseZoom = this.increaseZoom.bind(this);
    this.decreaseZoom = this.decreaseZoom.bind(this);
  }

  /* Component lifecycle */
  shouldComponentUpdate(newProps) {
    return this.props.zoom !== newProps.zoom;
  }

  setZoom(zoom) {
    this.props.onZoomChange && this.props.onZoomChange(zoom);
  }

  increaseZoom() {
    if (this.props.zoom === this.props.maxZoom) return;
    this.setZoom(this.props.zoom + 1);
  }

  decreaseZoom() {
    if (this.props.zoom === this.props.minZoom) return;
    this.setZoom(this.props.zoom - 1);
  }

  render() {
    const zoomInClass = classnames('zoom-control-btn', {
      '-disabled': this.props.zoom === this.props.maxZoom
    });

    const zoomOutClass = classnames('zoom-control-btn', {
      '-disabled': this.props.zoom === this.props.minZoom
    });

    return (
      <div className="c-zoom-control">
        <ul className="zoom-control-list">
          <li className="zoom-control-item">
            <button className={zoomInClass} type="button" onClick={this.increaseZoom}>+</button>
          </li>
          <li className="zoom-control-item">
            <button className={zoomOutClass} type="button" onClick={this.decreaseZoom}>-</button>
          </li>
        </ul>
      </div>
    );
  }
}

ZoomControl.propTypes = {
  zoom: React.PropTypes.number,
  maxZoom: React.PropTypes.number,
  minZoom: React.PropTypes.number,
  onZoomChange: React.PropTypes.func
};

ZoomControl.defaultProps = {
  zoom: 3,
  maxZoom: 7,
  minZoom: 2
};
