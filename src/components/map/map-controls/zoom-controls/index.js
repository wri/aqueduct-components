import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';

// components
import Icon from 'components/ui/icon';

// styles
import styles from './styles.scss';

class ZoomControls extends PureComponent {
  static propTypes = {
    zoom: PropTypes.number,
    maxZoom: PropTypes.number,
    minZoom: PropTypes.number,
    className: PropTypes.string,
    onZoomChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    zoom: 3,
    maxZoom: 20,
    minZoom: 2,
    className: null
  }

  setZoom(zoom) {
    this.props.onZoomChange(zoom);
  }

  increaseZoom = () => {
    const { zoom, maxZoom } = this.props;
    if (zoom === maxZoom) return;
    this.setZoom(zoom + 1);
  }

  decreaseZoom = () => {
    const { zoom, minZoom } = this.props;
    if (zoom === minZoom) return;
    this.setZoom(zoom - 1);
  }

  render() {
    const { zoom, maxZoom, minZoom, className } = this.props;
    const zoomInClass = classnames(
      'zoom-control-btn',
      { '-disabled': zoom === maxZoom }
    );
    const zoomOutClass = classnames(
      'zoom-control-btn',
      { '-disabled': zoom === minZoom }
    );

    const customClass = classnames({ [className]: !!className });

    return (
      <ul styleName="c-zoom-controls" className={customClass}>
        <li>
          <button
            type="button"
            styleName={zoomInClass}
            onClick={this.increaseZoom}
          >
            <Icon name="plus" />
          </button>
        </li>
        <li>
          <button
            type="button"
            styleName={zoomOutClass}
            onClick={this.decreaseZoom}
          >
            <Icon name="minus" />
          </button>
        </li>
      </ul>
    );
  }
}

export default CSSModules(ZoomControls, styles, { allowMultiple: true });
