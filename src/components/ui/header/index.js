import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import Icon from 'components/ui/icon';
import ToolsMenu from './tools';

import logoImage from './logo.png';

// styles
import './styles.scss';

class Header extends PureComponent {
  static propTypes = {
    app: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
  }

  state = { tools: false }

  onClickTools = () => {
    this.setState({ tools: !this.state.tools });
  }

  render() {
    const { app, title, children } = this.props;
    const toolsButtonClass = classnames({ '-active': this.state.tools });

    return (
      <header styleName="c-header" role="banner">
        <h1 styleName="c-header-logo">
          <a href="/" styleName="header-logo" style={{ backgroundImage: `url(${logoImage})` }}><span>Logo</span></a>
          <a href="/" styleName="header-title">{title}</a>
        </h1>
        <nav role="navigation">
          <ul styleName="list">
            <li>
              <button styleName={toolsButtonClass} onClick={this.onClickTools}>
                <span>Tools</span>
              </button>
            </li>
            <li>
              {children}
            </li>
            <li>
              <a href="/search">
                <Icon name="search" />
              </a>
            </li>
          </ul>
        </nav>
        <ToolsMenu
          visible={this.state.tools}
          currentApp={app}
        />
      </header>
    );
  }
}

export default Header;
