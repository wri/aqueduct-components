import React from 'react';
import isEqual from 'lodash/isEqual';

export default class CustomSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: props.options ? props.options.find(item => item.value === props.value) : null,
      closed: true,
      selectedIndex: 0
    };

    // Bindings
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onKeydown = this.onKeydown.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.onScreenClick = this.onScreenClick.bind(this);
    this.resetSelectedIndex = this.resetSelectedIndex.bind(this);
  }

  componentWillReceiveProps({ options, value }) {
    if (!isEqual(this.props.options, options)) {
      this.setState({
        selectedItem: options.find(item => item.value === value)
      });
    }
    if (this.props.value !== value) {
      this.setState({ selectedItem: this.props.options.find(item => item.value === value) });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onScreenClick);
  }

  // Event handler for event keyup on search input
  onKeydown(evt) {
    evt.preventDefault();
    switch (evt.keyCode) {
      // key up
      case 38: {
        const index = this.state.selectedIndex > 0 ?
          this.state.selectedIndex - 1 : this.props.options.length - 1;
        this.setSelectedIndex(index);
        break;
      }
      // key down
      case 40: {
        const index = (this.state.selectedIndex < this.props.options.length - 1) ?
          this.state.selectedIndex + 1 : 0;
        this.setSelectedIndex(index);
        break;
      }
      // enter key
      case 13: {
        if (this.state.selectedIndex !== -1 && this.props.options.length) {
          const selectedItem = this.props.options[this.state.selectedIndex];
          this.resetSelectedIndex();
          this.selectItem(selectedItem);
        }
        break;
      }
      // esc key
      case 27: {
        this.close();
        break;
      }
      default:
        break;
    }
  }

  onScreenClick(evt) {
    const clickOutside = this.el.contains && !this.el.contains(evt.target);
    if (clickOutside) {
      this.close();
      window.removeEventListener('click', this.onScreenClick);
    }
  }

  setSelectedIndex(index) {
    this.setState({ selectedIndex: index });
  }

  resetSelectedIndex() {
    this.setSelectedIndex(0);
  }

  // Event handler for mouseup event on options list item
  selectItem(item) {
    this.setState({ selectedItem: item });
    this.close();
    this.props.onValueChange && this.props.onValueChange(item);
  }

  toggle() {
    return this.state.closed ? this.open() : this.close();
  }

  // Method than shows the option list
  open() {
    // Close select when clicking outside it
    window.addEventListener('click', this.onScreenClick);
    window.addEventListener('keydown', this.onKeydown);
    this.setState({ closed: false });
  }

  // Method that closes the options list
  close() {
    window.removeEventListener('click', this.onScreenClick);
    window.removeEventListener('keydown', this.onKeydown);
    this.setState({
      closed: true,
      filteredOptions: this.props.options
    });
    this.resetSelectedIndex();
  }

  render() {
    // Class names
    const cNames = ['c-custom-select'];
    this.props.className && cNames.push(this.props.className);
    this.state.closed && cNames.push('-closed');

    return (
      <div ref={(node) => { this.el = node; }} className={cNames.join(' ')}>
        <span
          ref={(node) => { this.elTitle = node; }}
          className="custom-select-text"
          onClick={this.toggle}
        >
          <span>{this.state.selectedItem ?
            this.state.selectedItem.label : this.props.placeholder}</span>
        </span>
        {this.state.closed ||
          <ul className="custom-select-options">
            {this.props.options.map((item, index) => {
              const cName = (index === this.state.selectedIndex) ? '-selected' : '';
              return (<li
                key={index}
                className={cName}
                onMouseEnter={() => { this.setSelectedIndex(index); }}
                onMouseDown={() => this.selectItem(item)}
              >
                {item.label}
              </li>);
            })}
          </ul>
        }
      </div>
    );
  }
}

CustomSelect.propTypes = {
  options: React.PropTypes.array,
  onValueChange: React.PropTypes.func,
  value: React.PropTypes.string,
  className: React.PropTypes.string,
  placeholder: React.PropTypes.string
};
