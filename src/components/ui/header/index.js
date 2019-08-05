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
    const { title, embed, children, appRoute, logoRoute } = this.props;
    const componentClass = classnames(
      'c-header',
      { '-embed': embed }
    );

    return (
      <header styleName={componentClass} role="banner">
        <h1 styleName="c-header-logo">
          <a href={appRoute} styleName="header-logo" style={{ backgroundImage: `url(${logoRoute})` }}><span>Logo</span></a>
          <a href={appRoute} styleName="header-title">{title}</a>
        </h1>
        {!embed && (
          <nav role="navigation">
            <ul styleName="list">
              <li>
                {children}
              </li>
            </ul>
          </nav>
        )}
      </header>
    );
  }
}

export default Header;
