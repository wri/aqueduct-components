import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isEqual from 'lodash/isEqual';

// components
import Button from 'components/ui/button';
import Icon from 'components/ui/icon';
import Spinner from 'components/ui/spinner';

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
    onMoreInfo: PropTypes.func,
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
    onMoreInfo: null,
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
    const { onDownloadWidget, widget } = this.props;

    if (onDownloadWidget) onDownloadWidget(value, widget);
  }

  onMoreInfo = () => {
    const { onMoreInfo, widget } = this.props;

    if (onMoreInfo) onMoreInfo(widget);
  }

  onRefresh = () => {
    const { params, getWidgetData } = this.props;

    getWidgetData(params.id);
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
    const componentClass = classnames(`c-widget -${theme}`);
    const externalClass = classnames({ [customClass]: !!customClass });
    const isDev = process.env.NODE_ENV === 'development';

    return (
      <div
        styleName={componentClass}
        className={externalClass}
      >
        <header styleName="widget-header">
          {title &&
            <span styleName="widget-title">{title}</span>}
        </header>

        <div styleName="widget-content">
          {widget.loading && <Spinner />}
          {!!(widget.error || []).length &&
            <div styleName="error-container">
              {isDev && (widget.error).map(err => (
                <div
                  key={`${err.status}-${err.detail}`}
                  styleName="error-message"
                >
                  {err.status && <div styleName="error-status">{err.status}</div>}
                  {err.detail && <div styleName="error-detail">{err.detail}</div>}
                  <Button onClick={this.onRefresh}>
                    <Icon name="refresh" className="-medium" theme={theme} />
                  </Button>
                </div>))}
              {!isDev && (
                <div styleName="error-message">
                  <div styleName="error-detail">
                    Ops, somehting went wrong.<br />
                    Press the below button to refresh this widget.
                  </div>
                  <Button onClick={this.onRefresh}>
                    <Icon name="refresh" className="-medium" theme={theme} />
                  </Button>
                </div>
              )}
            </div>
          }
          {(!widget.loading && !(widget.error || []).length) && children(widget)}
        </div>
      </div>
    );
  }
}

export default Widget;

