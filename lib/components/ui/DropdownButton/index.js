'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownButton = function (_React$Component) {
  _inherits(DropdownButton, _React$Component);

  function DropdownButton(props) {
    _classCallCheck(this, DropdownButton);

    var _this = _possibleConstructorReturn(this, (DropdownButton.__proto__ || Object.getPrototypeOf(DropdownButton)).call(this, props));

    _this.state = {
      // Whether the dropdown is closed or not
      closed: true,
      // Index of the active item
      activeIndex: 0
    };

    _this.onClickWindow = _this.onClickWindow.bind(_this);
    return _this;
  }

  _createClass(DropdownButton, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.activeItem) this.activeItem.focus();
    }

    /**
     * Event hander executed when the user presses a key while the focus is
     * on the component
     * @param {Event} e - event
     */

  }, {
    key: 'onKeydown',
    value: function onKeydown(e) {
      var activeIndex = void 0;
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
            var activeItem = this.props.options[this.state.activeIndex];
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

  }, {
    key: 'onSelectItem',
    value: function onSelectItem(item) {
      this.props.onSelect(item);
      this.close();
    }

    /**
     * Event handler executed when the window receives a click event
     * @param {Event} e - event
     */

  }, {
    key: 'onClickWindow',
    value: function onClickWindow(e) {
      var isOutside = this.el.contains && !this.el.contains(e.target);
      if (isOutside) this.close();
    }

    /**
     * Set the active index
     * @param {number} index
     */

  }, {
    key: 'setActiveIndex',
    value: function setActiveIndex(index) {
      this.setState({ activeIndex: index });
    }

    /**
     * Set the listeners that aren't attached to a DOM element of the component
     */

  }, {
    key: 'setListeners',
    value: function setListeners() {
      window.addEventListener('click', this.onClickWindow);
    }

    /**
     * Remove the listeners set with setListeners
     */

  }, {
    key: 'removeListeners',
    value: function removeListeners() {
      window.removeEventListener('click', this.onClickWindow);
    }

    /**
     * Toggle the dropdown
     */

  }, {
    key: 'toggle',
    value: function toggle() {
      var isClosed = this.state.closed;
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

  }, {
    key: 'close',
    value: function close() {
      this.setState({ closed: true });
      this.removeListeners();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var dropdownClasses = ['dropdown-menu'];
      if (this.props.top) dropdownClasses.push('-top');
      if (this.props.left) dropdownClasses.push('-left');

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(node) {
            _this2.el = node;
          },
          className: 'c-dropdown-button ' + (this.props.className ? this.props.className : ''),
          onKeyDown: function onKeyDown(e) {
            return _this2.onKeydown(e);
          },
          tabIndex: '0'
        },
        _react2.default.createElement(
          'div',
          { role: 'button', 'aria-haspopup': 'true', 'aria-controls': 'test', 'aria-expanded': !this.state.closed, onClick: function onClick() {
              return _this2.toggle();
            } },
          this.props.children
        ),
        this.state.closed || _react2.default.createElement(
          'ul',
          { id: 'test', role: 'menu', className: dropdownClasses.join(' ') },
          this.props.options.map(function (item, index) {
            var className = index === _this2.state.activeIndex ? '-selected' : '';
            return _react2.default.createElement(
              'li',
              {
                key: item.label,
                ref: function ref(node) {
                  if (index === _this2.state.activeIndex) _this2.activeItem = node;
                },
                role: 'menuitem',
                tabIndex: '-1',
                className: className,
                onMouseEnter: function onMouseEnter() {
                  return _this2.setActiveIndex(index);
                },
                onClick: function onClick() {
                  return _this2.onSelectItem(item);
                }
              },
              item.label
            );
          })
        )
      );
    }
  }]);

  return DropdownButton;
}(_react2.default.Component);

exports.default = DropdownButton;


DropdownButton.propTypes = {
  // Dropdown options
  options: _react2.default.PropTypes.array,
  // Callback executed when one option is selected
  onSelect: _react2.default.PropTypes.func,
  // Classes to append to the element
  className: _react2.default.PropTypes.string,
  // Actual button used to toggle the menu
  children: _react2.default.PropTypes.object,
  // Open the dropdown towards the top
  top: _react2.default.PropTypes.bool,
  // Open the dropdown towards the right
  left: _react2.default.PropTypes.bool
};