import React from 'react';
import PropTypes from 'prop-types';
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
    this.sidebarNode && this.setState({
      opened: !this.state.opened
    }, () => {
      this.props.setSidebarWidth((this.state.opened) ? this.sidebarNode.offsetWidth : 50);
    });
  }

  triggerResize() {
    this.sidebarNode &&
      this.props.setSidebarWidth((this.state.opened) ? this.sidebarNode.offsetWidth : 50);
  }

  render() {
    const asideCNames = ['l-sidebar', 'c-sidebar'];
    const btnCNames = ['l-sidebar-toggle', 'btn-toggle'];
    if (this.state.opened) {
      asideCNames.push('-opened');
      btnCNames.push('-opened');
    }

    return (
      <aside ref={(node) => { this.sidebarNode = node; }} className={asideCNames.join(' ')}>
        <button type="button" className={btnCNames.join(' ')} onClick={this.triggerToggle}>
          <Icon className="-medium" name={this.state.opened ? 'icon-arrow-left' : 'icon-arrow-right'} />
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
  setSidebarWidth: PropTypes.func
};
