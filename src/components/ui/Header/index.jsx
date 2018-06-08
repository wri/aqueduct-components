import { Link, withRouter } from 'react-router';
import React from 'react';
import PropTypes from 'prop-types';
import OnlyOn from '../Responsive';
import Icon from '../Icon';
import HeaderTools from './HeaderTools';
import DropdownButton from '../DropdownButton';

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
    const desktopNav = (
      <nav role="navigation">
        {/* RIGHT MENU */}
        <ul className="list">
          <li>
            <DropdownButton
              options={[
                { label: 'About Aqueduct Food', value: 'aqueduct-food' }
              ]}
              dropdownClassName="-bottom -left"
              onSelect={selected => this.onAboutSelect(selected.value)}
            >
              <button className="c-header-button">
                About
              </button>
            </DropdownButton>
          </li>
          <li>
            <Link className="c-header-button" to="/how-to">How to </Link>
          </li>
          <li>
            <button data-active="tools" className={`c-header-button ${this.state.active === 'tools' && '-active'}`} onClick={this.onClickBtnAction}>
              <span>Tools</span>
            </button>
          </li>
          <li>
            <Link className="c-header-button" to="/resource-library">Resource Library </Link>
          </li>
          <li>
            <Link className="c-header-button" to="/get-involved">Get involved </Link>
          </li>
          <li>
            <Link className="c-header-button" to="/search">
              <Icon name="icon-search" />
            </Link>
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
          {desktopNav}
        </OnlyOn>
        <OnlyOn device="desktop">
          <HeaderTools active={this.state.active === 'tools'} />
        </OnlyOn>

      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {
  title: ''
};

export default withRouter(Header);