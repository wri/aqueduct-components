import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';

// styles
import styles from './styles.scss';

export class Tabs extends PureComponent {
  static propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      default: PropTypes.bool
    })).isRequired,
    className: PropTypes.string,
    customClass: PropTypes.string,
    theme: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    className: null,
    customClass: null,
    theme: 'dark',
    onChange: null
  };

  constructor(props) {
    super(props);

    this.state = {
      currentTab:
        (props.tabs.find(tab => tab.default)) ?
          props.tabs.find(tab => tab.default).value : props.tabs[0].value
    };
  }

  onChange = (currentTab) => {
    this.setState({ currentTab });

    const selectedTab = this.props.tabs.find(tab => tab.value === currentTab);

    if (this.props.onChange) this.props.onChange(selectedTab);
  }

  render() {
    const { className, customClass, theme, tabs } = this.props;
    const { currentTab } = this.state;
    const componentClass = classnames(`c-tabs -${theme}`, { [className]: !!className });
    const externalClass = classnames({ [customClass]: !!customClass });

    return (
      <div styleName={componentClass} className={externalClass}>
        <ul styleName="tab-list">
          {tabs.map(tab => (
            <li key={tab.value} styleName={classnames('tab-item', { '-current': tab.value === currentTab })}>
              <button
                type="button"
                onClick={() => this.onChange(tab.value)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CSSModules(Tabs, styles, { allowMultiple: true });
