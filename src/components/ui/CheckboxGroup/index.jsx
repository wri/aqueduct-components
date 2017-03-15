import React from 'react';
import isEqual from 'lodash/isEqual';
import Checkbox from '../Checkbox';

export default class CheckboxGroup extends React.Component {

  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      checked: this.props.selected || []
    };
    // BINDINGS
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.selected, this.props.selected)) {
      this.setState({
        checked: nextProps.selected
      });
    }
  }

  /**
   * UI EVENTS
   * - onChange
  */
  onChange(newItem) {
    // Send objects
    const selectedObj = this.props.items.find(item => item.value === newItem.value);
    const newChecked = this.state.checked.slice(0);
    if (newItem.checked) {
      newChecked.push(selectedObj.value);
    } else {
      newChecked.splice(newChecked.indexOf(selectedObj.value), 1);
    }
    this.setState({
      checked: newChecked
    });
    this.props.onChange && this.props.onChange(newChecked);
  }

  getCheckbox() {
    return this.props.items.map((item, i) => (
      <Checkbox
        key={i}
        name={this.props.name}
        value={item.value}
        checked={this.state.checked.includes(item.value)}
        label={item.label}
        onChange={newSelected => this.onChange(newSelected)}
      />
      ));
  }

  render() {
    return (
      <div className={`c-checkbox-box ${this.props.className ? this.props.className : ''}`}>
        {this.props.title && <span className="checkbox-box-title">{this.props.title}</span>}
        {this.getCheckbox()}
      </div>
    );
  }
}

CheckboxGroup.propTypes = {
  name: React.PropTypes.string,
  title: React.PropTypes.string,
  selected: React.PropTypes.array,
  className: React.PropTypes.string,
  items: React.PropTypes.array,
  onChange: React.PropTypes.func
};
