import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// styles
import './styles.scss';

class Header extends PureComponent {
  static propTypes = {
    appRoute: PropTypes.string.isRequired,
    logoRoute: PropTypes.string,
    title: PropTypes.string.isRequired,
    embed: PropTypes.bool,
    children: PropTypes.any.isRequired
  }

  static defaultProps = {
    embed: false,
    logoRoute: 'https://rawcdn.githack.com/Vizzuality/aqueduct-water-risk/f84043796b88afd1903022b1eb1047b20fb26f07/public/images/logo.png'
  }

  render() {
    const { title, embed, appRoute } = this.props;
    const componentClass = classnames(
      'c-header',
      { '-embed': embed }
    );

    return (
      <header styleName={componentClass} role="banner">
        <h1 styleName="c-header-logo">
          <a href={appRoute} styleName="header-logo"><span>Logo</span></a>
          <a href={appRoute} styleName="header-title">{title}</a>
        </h1>
        {!embed && (
          <nav role="navigation">
            <ul className="list">
              <li>
                <a className="c-header-button" href="https://www.wri.org/aqueduct/help-center" target="_blank" rel="noopener noreferrer">Help Center</a>
              </li>
              <li>
                <a className="c-header-button" href="https://www.wri.org/aqueduct/tools" target="_blank" rel="noopener noreferrer">Tools</a>
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
                <a className="c-header-button" href="https://www.wri.org/subscribe-freshwater" target="_blank" rel="noopener noreferrer">Subscribe</a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    );
  }
}

export default Header;
