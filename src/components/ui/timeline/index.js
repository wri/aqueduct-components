import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';

// styles
import styles from './styles.scss';

export class Timeline extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
      selected: PropTypes.bool
    })).isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string
  }

  static defaultProps = {
    disabled: false,
    onChange: null,
    className: null
  }

  onClickItem = (item) => {
    if (this.props.onChange) this.props.onChange(item);
  }

  handleKeyPress = (evt, item) => {
    // user presses enter key
    if (evt.keyCode === 27) this.onClickItem(item);
  }

  render() {
    const { items, className, disabled } = this.props;
    const componentClass = classnames(
      'c-timeline', {
        [className]: !!className,
        '-disabled': disabled
      }
    );

    return (
      <div styleName={componentClass}>
        <ul styleName="timeline-list">
          {items.map((item) => {
            const itemClassList = classnames(
              'timeline-list-item',
              { '-selected': item.selected }
            );

            return (
              <li
                key={item.value}
                styleName={itemClassList}
                role="presentation"
                onClick={() => this.onClickItem(item)}
                onKeyPress={evt => this.handleKeyPress(evt, item)}
              >
                <div styleName="timeline-label">
                  {item.label}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CSSModules(Timeline, styles, { allowMultiple: true });
