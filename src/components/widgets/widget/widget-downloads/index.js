import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

// components
import Button from 'components/ui/button';

// constants
import { WIDGET_DOWNLOAD_OPTIONS } from './constants';

// styles
import styles from './styles.scss';

export class WidgetDownloads extends PureComponent {
  static propTypes = {
    downloadOptions: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string
      })
    ),
    onDownloadOption: PropTypes.func
  }

  static defaultProps = {
    downloadOptions: WIDGET_DOWNLOAD_OPTIONS,
    onDownloadOption: null
  }

  onClickDownloadOption = ({ value }) => {
    const { onDownloadOption } = this.props;

    if (onDownloadOption) onDownloadOption(value);
  }

  render() {
    const { downloadOptions } = this.props;

    return (
      <div styleName="c-widget-downloads">
        <ul styleName="widget-download-list">
          {downloadOptions.map(downloadOption => (
            <li
              key={downloadOption.value}
              styleName="widget-download-item"
            >
              <Button
                onClick={() => this.onClickDownloadOption(downloadOption)}
                customClass="aq__widget-download-btn"
              >
                {downloadOption.label}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default CSSModules(WidgetDownloads, styles, { allowMultiple: true });
