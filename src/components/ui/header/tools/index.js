import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import Icon from 'components/ui/icon';

// constants
import { TOOLS } from './constants';

// styles
import './styles.scss';

class Tools extends PureComponent {
  static propTypes = {
    currentApp: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired
  }

  render() {
    const { visible, currentApp } = this.props;
    const componentClass = classnames(
      'c-tools-menu',
      { '-active': visible }
    );

    return (
      <div styleName={componentClass}>
        {TOOLS.map(tool => (
          <a
            key={tool.app}
            styleName={classnames('item', { '-active': tool.app === currentApp })}
            href={tool.route}
          >
            <Icon className="-big" name="plus" />
            <span>{tool.label}</span>
          </a>
        ))}
      </div>
    );
  }
}

export default Tools;
