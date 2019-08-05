import { withRouter } from 'react-router';
import React from 'react';
import PropTypes from 'prop-types';
import OnlyOn from '../Responsive';
import HeaderTools from './HeaderTools';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      active: ''
    };

    // BINDINGS
    this.onClickBtnAction = this.onClickBtnAction.bind(this);
    this.onAboutSelect = this.onAboutSelect.bind(this);
  }

  /**
   * UI EVENTS
   * - onClickBtnAction
  */
  onClickBtnAction(e) {
    const current = e.currentTarget.dataset.active;

    this.setState({
      active: (current !== this.state.active) ? current : ''
    });
  }

  onAboutSelect() {
    const location = {
      pathname: '/about'
    };
    this.props.router.push(location);
  }

  render() {
    const { currentApp } = this.props;
    const desktopNav = (
      <nav role="navigation">
        {/* RIGHT MENU */}
        <ul className="list">
          <li>
            <button
              data-active="tools"
              className={`c-header-button ${this.state.active === 'tools' && '-active'}`}
              onClick={this.onClickBtnAction}>
              <span>Tools</span>
            </button>
          </li>
          <li>
            <a className="c-header-button" href="https://aqueduct-wriorg.pantheonsite.io/aqueduct/blog" target="_blank" rel="noopener noreferrer">Blog</a>
          </li>
          <li>
            <a className="c-header-button" href="https://aqueduct-wriorg.pantheonsite.io/aqueduct/publications" target="_blank" rel="noopener noreferrer">Publications</a>
          </li>
          <li>
            <a className="c-header-button" href="https://aqueduct-wriorg.pantheonsite.io/aqueduct/data" target="_blank" rel="noopener noreferrer">Data</a>
          </li>
          <li>
            <a className="c-header-button" href="https://aqueduct-wriorg.pantheonsite.io/aqueduct/user-stories" target="_blank" rel="noopener noreferrer">User Stories</a>
          </li>
          <li>
            <a className="c-header-button" href="https://aqueduct-wriorg.pantheonsite.io/aqueduct/about" target="_blank" rel="noopener noreferrer">About</a>
          </li>
          <li>
            <a className="c-header-button" href="https://aqueduct-wriorg.pantheonsite.io/aqueduct/subscribe" target="_blank" rel="noopener noreferrer">Subscribe</a>
          </li>
        </ul>
      </nav>
    );

    return (
      <header role="banner" className="l-header c-header">
        {/* LOGO */}
        <h1 className="c-header-logo">
          <a href="/" className="header-logo"><span>Logo</span></a>
          <a href="/" className="header-title">{this.props.title}</a>
        </h1>
        <OnlyOn device="desktop">
          <HeaderTools
            active={this.state.active === 'tools'}
            currentApp={currentApp}
          />
          {desktopNav}
        </OnlyOn>

      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  currentApp: PropTypes.string.isRequired
};

export default withRouter(Header);
