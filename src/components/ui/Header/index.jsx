import { withRouter } from 'react-router';
import React from 'react';
import PropTypes from 'prop-types';
import OnlyOn from '../Responsive';

class Header extends React.Component {
  render() {
    const { appRoute } = this.props;
    const desktopNav = (
      <nav role="navigation">
        {/* RIGHT MENU */}
        <ul className="list">
          <li>
            <a className="c-header-button" href="https://www.wri.org/aqueduct#aqueduct-tools" target="_blank" rel="noopener noreferrer">Tools</a>
          </li>
          <li>
            <a className="c-header-button" href="https://wri.org/aqueduct/blog" target="_blank" rel="noopener noreferrer">Blog</a>
          </li>
          <li>
            <a className="c-header-button" href="https://wri.org/aqueduct/publications" target="_blank" rel="noopener noreferrer">Publications</a>
          </li>
          <li>
            <a className="c-header-button" href="https://wri.org/aqueduct/data" target="_blank" rel="noopener noreferrer">Data</a>
          </li>
          <li>
            <a className="c-header-button" href="https://wri.org/aqueduct/user-stories" target="_blank" rel="noopener noreferrer">User Stories</a>
          </li>
          <li>
            <a className="c-header-button" href="https://wri.org/aqueduct/about" target="_blank" rel="noopener noreferrer">About</a>
          </li>
          <li>
            <a className="c-header-button" href="https://wri.org/aqueduct/subscribe" target="_blank" rel="noopener noreferrer">Subscribe</a>
          </li>
        </ul>
      </nav>
    );

    return (
      <header role="banner" className="l-header c-header">
        {/* LOGO */}
        <h1 className="c-header-logo">
          <a href={appRoute} className="header-logo"><span>Logo</span></a>
          <a href={appRoute} className="header-title">{this.props.title}</a>
        </h1>
        <OnlyOn device="desktop">
          {desktopNav}
        </OnlyOn>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  appRoute: PropTypes.string.isRequired
};

export default withRouter(Header);
