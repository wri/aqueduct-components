
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
    customClass: PropTypes.string,
    onToggle: PropTypes.func.isRequired
  }

  static defaultProps = {
    className: null,
    customClass: null
  }

  onClickToggle = () => {
    const { visible } = this.props;
    if (this.props.onToggle) this.props.onToggle(!visible);
  }

  render() {
    const { className, customClass, visible } = this.props;
    const componentClass = classnames(
      'c-sidebar',
      {
        '-visible': visible,
        [className]: !!className
      }
    );
    const externalClass = classnames({ [customClass]: !!customClass });
    const iconName = classnames({
      'arrow-left': visible,
      'arrow-right': !visible
    });

    return (
      <aside styleName={componentClass} className={externalClass}>
        {this.props.children}
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
