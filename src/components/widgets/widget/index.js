import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Tooltip } from 'wri-api-components';
import isEqual from 'lodash/isEqual';

// components
import Button from 'components/ui/button';
import Icon from 'components/ui/icon';
import Spinner from 'components/ui/spinner';
import WidgetDownloads from './widget-downloads';

// styles
import './styles.scss';

class Widget extends PureComponent {
  static propTypes = {
    params: PropTypes.object.isRequired,
    widget: PropTypes.shape({
      data: PropTypes.any,
      error: PropTypes.any,
      loading: PropTypes.bool
    }),
    title: PropTypes.string,
    theme: PropTypes.string,
    customClass: PropTypes.string,
    hideWidgetOptions: PropTypes.bool,
    getWidgetData: PropTypes.func.isRequired,
    onDownloadWidget: PropTypes.func,
    onShareWidget: PropTypes.func,
    children: PropTypes.func.isRequired
  };

  static defaultProps = {
    widget: {
      data: [],
      error: null,
      loading: true
    },
    title: null,
    hideWidgetOptions: false,
    onDownloadWidget: null,
    onShareWidget: null,
    theme: 'dark',
    customClass: null
  }

  componentDidMount() {
    const { params, getWidgetData } = this.props;
    getWidgetData(params.id);
  }

  componentWillReceiveProps(nextProps) {
    const { params: nextParams } = nextProps;
    const { params, getWidgetData } = this.props;

    const paramasChanged = !isEqual(params, nextParams);

    if (paramasChanged) getWidgetData(params.id);
  }

  onDownloadWidget = (value) => {
    const { onDownloadWidget, params } = this.props;
    const { id } = params;

    if (onDownloadWidget) onDownloadWidget(value, { id });
  }

  onShareWidget = () => {
    const { onShareWidget, widget } = this.props;

    if (onShareWidget) onShareWidget(widget);
  }

  render() {
    const {
      title,
      theme,
      customClass,
      widget,
      hideWidgetOptions,
      children
    } = this.props;
    const componentClass = classnames(
      `c-widget -${theme}`,
      { [customClass]: !!customClass }
    );

    return (
      <div styleName={componentClass}>
        <header styleName="widget-header">
          {title &&
            <span styleName="widget-title">{title}</span>}
          {!hideWidgetOptions &&
            <div className="widget-options">
              <ul styleName="widget-options-list">
                <li styleName="widget-options-item">
                  <Tooltip
                    overlay={<WidgetDownloads onDownloadOption={this.onDownloadWidget} />}
                    overlayClassName="c-rc-tooltip -default aq__widget-download-tooltip"
                    placement="bottom"
                    trigger={['click']}
                    mouseLeaveDelay={0}
                    destroyTooltipOnHide
                  >
                    <Button>
                      <Icon name="download" className="-small" theme={theme} />
                    </Button>
                  </Tooltip>
                </li>
                <li styleName="widget-options-item">
                  <Button onClick={this.onShareWidget}>
                    <Icon name="share" className="-small" theme={theme} />
                  </Button>
                </li>
              </ul>
            </div>}
        </header>

        <div styleName="widget-content">
          {widget.loading && <Spinner />}
          {children(widget)}
        </div>
      </div>
    );
  }
}

export default Widget;

