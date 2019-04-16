import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import debounce from 'lodash/debounce';
import Icon from '../Icon';

export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);

    // BINDINGS
    this.triggerToggle = this.triggerToggle.bind(this);
    this.triggerResize = debounce(this.triggerResize.bind(this), 100);

    this.state = {
      opened: isNaN(props.opened) ? true : props.opened
    };
  }

  componentDidMount() {
    this.props.setSidebarWidth(this.sidebarNode.offsetWidth);
    window.addEventListener('resize', this.triggerResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeEvent);
    this.props.setSidebarWidth(0);
  }

  /**
   * UI EVENTS
   * - triggerToggle
  */
  triggerToggle() {
    if (this.sidebarNode) {
      this.setState({
        opened: !this.state.opened
      }, () => {
        this.props.setSidebarWidth((this.state.opened) ? this.sidebarNode.offsetWidth : 50);
      });
    }
  }

  triggerResize() {
    if (this.sidebarNode) {
      this.props.setSidebarWidth((this.state.opened) ? this.sidebarNode.offsetWidth : 50);
    }
  }

  render() {
    const { className } = this.props;
    const componentClass = classnames(
      'l-sidebar',
      'c-sidebar',
      {
        [className]: !!className,
        '-opened': this.state.opened
      }
    );
    const buttonClass = classnames(
      'l-sidebar-toggle',
      'btn-toggle',
      { '-opened': this.state.opened }
    );
    const iconName = classnames({
      'icon-arrow-left': this.state.opened,
      'icon-arrow-right': !this.state.opened
    });

    return (
      <aside
        ref={(node) => { this.sidebarNode = node; }}
        className={componentClass}
      >
        <button
          type="button"
          className={buttonClass}
          onClick={this.triggerToggle}
        >
          <Icon
            className="-medium"
            name={iconName}
          />
        </button>
        <div className="l-sidebar-content">
          {this.props.children}
        </div>
      </aside>
    );
  }
}

Sidebar.propTypes = {
  opened: PropTypes.bool,
  children: PropTypes.array,
  className: PropTypes.string,
  setSidebarWidth: PropTypes.func
};

Sidebar.defaultProps = { className: null };
