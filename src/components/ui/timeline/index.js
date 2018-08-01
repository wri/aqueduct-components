import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import isEqual from 'lodash/isEqual';

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

  constructor(props) {
    super(props);

    this.state = { items: props.items };
  }

  componentWillReceiveProps(nextProps) {
    const { items } = this.props;
    const { items: nextItems } = nextProps;
    const itemsHaveChanged = !isEqual(items, nextItems);

    if (itemsHaveChanged) this.items = nextItems;
  }

  onClickItem = (selectedItem) => {
    const selectedItemIndex = this.state.items.findIndex(item =>
      item.value === selectedItem.value);

    const items = this.state.items.map((it, index) => ({
      ...it,
      ...index === selectedItemIndex ? { selected: true } : { selected: false }
    }));

    this.setState({ items }, () => {
      if (this.props.onChange) this.props.onChange(items[selectedItemIndex]);
    });
  }

  handleKeyPress = (evt, item) => {
    // user presses enter key
    if (evt.keyCode === 27) this.onClickItem(item);
  }

  render() {
    const { className, disabled } = this.props;
    const { items } = this.state;
    const componentClass = classnames('c-timeline', { '-disabled': disabled });
    const customClass = classnames({ [className]: !!className });

    return (
      <div styleName={componentClass} className={customClass}>
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