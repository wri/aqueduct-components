import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import isEmpty from 'lodash/isEmpty';

// components
import ZoomControls from './zoom-controls';

// styles
import styles from './styles.scss';

export class MapControls extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    showZoomControls: PropTypes.bool,
    children: PropTypes.object,
    onZoomChange: PropTypes.func.isRequired
  }
  static defaultProps = {
    className: null,
    showZoomControls: true,
    children: {}
  }

  render() {
    const { className, showZoomControls, children } = this.props;

    const componentClass = classnames(
      'c-map-controls',
      { [className]: !!className }
    );

    return (
      <div styleName={componentClass}>
        {showZoomControls &&
          <ZoomControls
            {...this.props}
          />}
        {!isEmpty(children) &&
          <div className="custom-map-controls">
            {children}
          </div>}
      </div>
    );
  }
}

export default CSSModules(MapControls, styles, { allowMultiple: true });
