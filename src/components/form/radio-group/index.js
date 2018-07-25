import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isEqual from 'lodash/isEqual';
import CSSModules from 'react-css-modules';

// components
import Radio from '../radio';

// styles
import styles from './styles.scss';

export class RadioGroup extends PureComponent {
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
    theme: PropTypes.oneOf(['light', 'dark']),
    className: PropTypes.string,
    customClass: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    title: null,
    theme: 'dark',
    className: null,
    customClass: null,
    onChange: null
  };

  constructor(props) {
    super(props);

    // this.items = props.items;
    this.state = { currentValue: (props.items.find(item => item.checked) || {}).value };
  }

  componentWillReceiveProps(nextProps) {
    const { items } = this.props;
    const { items: nextItems } = nextProps;
    const itemsHaveChanged = !isEqual(items, nextItems);

    if (itemsHaveChanged) {
      this.setState({ currentValue: (nextItems.find(item => item.checked) || {}).value });
    }
  }

  onChange = (selectedItem) => {
    this.setState({ currentValue: selectedItem.value });

    if (this.props.onChange) this.props.onChange(selectedItem);
  }

  render() {
    const { name, theme, className, customClass } = this.props;
    const { currentValue } = this.state;
    const componentClass = classnames(`c-radio-group -${theme}`, { [className]: !!className });
    const externalClass = classnames({ [customClass]: !!customClass });

    return (
      <div styleName={componentClass} className={externalClass}>
        {this.props.title &&
          <span styleName="group-title">{this.props.title}</span>}
        {this.props.items.map(item => (
          <Radio
            key={`${name}-${item.value}`}
            name={name}
            value={item.value}
            checked={item.value === currentValue}
            theme={theme}
            label={item.label}
            onChange={this.onChange}
          />
        ))}
      </div>
    );
  }
}

export default CSSModules(RadioGroup, styles, { allowMultiple: true });
