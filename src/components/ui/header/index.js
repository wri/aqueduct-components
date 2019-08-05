import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// constants
import { TOOLS } from 'components/ui/header/tools/constants';

// components
import Icon from 'components/ui/icon';
import ToolsMenu from './tools';

// statics
import logoImage from './logo.png';

// styles
import './styles.scss';

class Header extends PureComponent {
  static propTypes = {
    app: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    embed: PropTypes.bool,
    children: PropTypes.any.isRequired
  }

  static defaultProps = { embed: false }

  state = { tools: false }

  onClickTools = () => {
    this.setState({ tools: !this.state.tools });
  }

  render() {
    const { app, title, embed, children } = this.props;
    const toolsButtonClass = classnames({ '-active': this.state.tools });
    const componentClass = classnames(
      'c-header',
      { '-embed': embed }
    );

    const currentApp = TOOLS.find(_tool => _tool.app === app);

    return (
      <header styleName={componentClass} role="banner">
        <h1 styleName="c-header-logo">
          <a href={`${embed ? currentApp.route : '/'}`} styleName="header-logo" style={{ backgroundImage: `url(${logoImage})` }}><span>Logo</span></a>
          <a href={`${embed ? currentApp.route : '/'}`} styleName="header-title">{title}</a>
        </h1>
        {!embed &&
          <Fragment>
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
              </ul>
            </nav>
            <ToolsMenu
              visible={this.state.tools}
              currentApp={app}
            />
          </Fragment>}
      </header>
    );
  }
}

export default Header;
