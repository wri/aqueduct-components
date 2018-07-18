import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isEqual from 'lodash/isEqual';
import CSSModules from 'react-css-modules';

// components
import Checkbox from '../checkbox';

// styles
import styles from './styles.scss';

class CheckboxGroup extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
      checked: PropTypes.bool
    })).isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    title: null,
    className: null,
    onChange: null
  };

  constructor(props) {
    super(props);

    this.items = props.items;
  }

  componentWillReceiveProps(nextProps) {
    const { items } = this.props;
    const { items: nextItems } = nextProps;
    const itemsHaveChanged = !isEqual(items, nextItems);

    if (itemsHaveChanged) this.items = nextItems;
  }

  onChange = (selectedItem) => {
    const items = [...this.items];
    const selectedItemIndex = items.findIndex(item =>
      item.value === selectedItem.value);

    items[selectedItemIndex] = selectedItem;
    this.items = [...items];
    const selectedItems = items.filter(item => item.checked);

    if (this.props.onChange) this.props.onChange(selectedItems);
  }

  render() {
    const { name, className } = this.props;
    const componentClass = classnames(
      'c-checkbox-box',
      { [className]: !!className }
    );

    return (
      <div styleName={componentClass}>
        {this.props.title &&
          <span>{this.props.title}</span>}
        {this.items.map(item => (
          <Checkbox
            key={`${name}-${item.value}`}
            name={name}
            value={item.value}
            checked={item.selected}
            defaultChecked={item.checked}
            label={item.label}
            onChange={this.onChange}
          />
        ))}
      </div>
    );
  }
}

export default CSSModules(CheckboxGroup, styles, { allowMultiple: true });
