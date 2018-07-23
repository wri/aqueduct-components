
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';

// components
import Icon from 'components/ui/icon';

// styles
import styles from './styles.scss';

export class Sidebar extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    onToggle: PropTypes.func.isRequired
  }

  static defaultProps = { className: null }

  onClickToggle = () => {
    const { visible } = this.props;
    if (this.props.onToggle) this.props.onToggle(!visible);
  }

  render() {
    const { className, visible } = this.props;
    const componentClass = classnames(
      'c-sidebar',
      {
        [className]: !!className,
        '-visible': visible
      }
    );
    const iconName = classnames({
      'arrow-left': visible,
      'arrow-right': !visible
    });

    return (
      <aside styleName={componentClass}>
        <div>
          {this.props.children}
        </div>
        <button
          type="button"
          styleName="btn-toggle"
          onClick={this.onClickToggle}
        >
          <Icon className="-medium" name={iconName} />
        </button>
      </aside>
    );
  }
}

export default CSSModules(Sidebar, styles, { allowMultiple: true });
