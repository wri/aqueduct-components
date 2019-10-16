import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class DropdownButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // Whether the dropdown is closed or not
      closed: true,
      // Index of the active item
      activeIndex: 0
    };

    this.onClickWindow = this.onClickWindow.bind(this);
  }

  componentDidUpdate() {
    if (this.activeItem) this.activeItem.focus();
  }

  /**
   * Event hander executed when the user presses a key while the focus is
   * on the component
   * @param {Event} e - event
   */
  onKeydown(e) {
    let activeIndex;
    switch (e.keyCode) {
      // 37: left key, 38: up key
      case 37:
      case 38:
        if (this.state.closed) break;
        e.preventDefault();
        activeIndex = --this.state.activeIndex % this.props.options.length;
        this.setActiveIndex(activeIndex < 0 ? -activeIndex : activeIndex);
        break;

      // 39: right key, 40: down key
      case 39:
      case 40:
        if (this.state.closed) break;
        e.preventDefault();
        activeIndex = ++this.state.activeIndex % this.props.options.length;
        this.setActiveIndex(activeIndex);
        break;

      // 13: enter key, 32: space key
      case 13:
      case 32:
        e.preventDefault();
        if (this.state.closed) {
          this.toggle();
        } else {
          const activeItem = this.props.options[this.state.activeIndex];
          this.onSelectItem(activeItem);
        }
        break;

      // 27: esc key
      case 27:
        if (this.state.closed) break;
        e.preventDefault();
        this.close();
        break;

      default:
    }
  }

  /**
   * Event handler executed when an option is chosen
   * @param {{ label: string, value: string }} item
   */
  onSelectItem(item) {
    this.props.onSelect(item);
    this.close();
  }

  /**
   * Event handler executed when the window receives a click event
   * @param {Event} e - event
   */
  onClickWindow(e) {
    const isOutside = this.el.contains && !this.el.contains(e.target);
    if (isOutside) this.close();
  }

  /**
   * Set the active index
   * @param {number} index
   */
  setActiveIndex(index) {
    this.setState({ activeIndex: index });
  }

  /**
   * Set the listeners that aren't attached to a DOM element of the component
   */
  setListeners() {
    window.addEventListener('click', this.onClickWindow);
  }

  /**
   * Remove the listeners set with setListeners
   */
  removeListeners() {
    window.removeEventListener('click', this.onClickWindow);
  }

  /**
   * Toggle the dropdown
   */
  toggle() {
    const isClosed = this.state.closed;
    this.setState({ closed: !isClosed });

    if (isClosed) {
      // We reset the active index each time
      this.setState({ activeIndex: 0 });
      this.setListeners();
    } else {
      this.removeListeners();
    }
  }

  /**
   * Close the dropdown
   */
  close() {
    this.setState({ closed: true });
    this.removeListeners();
  }

  render() {
    const dropdownClasses = classnames({
      'dropdown-menu': true,
      [this.props.dropdownClassName]: !!this.props.dropdownClassName
    });

    return (
      <div
        ref={(node) => { this.el = node; }}
        className={`c-dropdown-button ${this.props.className ? this.props.className : ''}`}
        onKeyDown={e => this.onKeydown(e)}
        tabIndex="0"
      >
        <div
          role="button"
          aria-haspopup="true"
          aria-controls="test"
          aria-expanded={!this.state.closed}
          onClick={() => this.toggle()}
        >
          {this.props.children}
        </div>
        {this.state.closed ||
          <ul id="test" role="menu" className={dropdownClasses}>
            {this.props.options.map((item, index) => {
              const className = index === this.state.activeIndex ? '-selected' : '';
              return (
                <li
                  key={item.label}
                  ref={(node) => {
                    if (index === this.state.activeIndex) this.activeItem = node;
                  }}
                  role="menuitem"
                  tabIndex="-1"
                  className={classnames(className, { '-disabled': !!item.disabled })}
                  onMouseEnter={() => this.setActiveIndex(index)}
                  onClick={() => !item.disabled && this.onSelectItem(item)}
                >
                  {item.component ? <item.component {...item} /> : item.label }
                </li>
              );
            })}
          </ul>
        }
      </div>
    );
  }
}

DropdownButton.propTypes = {
  // Dropdown options
  options: PropTypes.array,
  // Callback executed when one option is selected
  onSelect: PropTypes.func,
  // Classes to append to the element
  className: PropTypes.string,
  // Classes to append to the dropdown
  dropdownClassName: PropTypes.string,
  // Actual button used to toggle the menu
  children: PropTypes.object,
};
