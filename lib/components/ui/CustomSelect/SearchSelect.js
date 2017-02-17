'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomSelect = function (_React$Component) {
  _inherits(CustomSelect, _React$Component);

  function CustomSelect(props) {
    _classCallCheck(this, CustomSelect);

    var _this = _possibleConstructorReturn(this, (CustomSelect.__proto__ || Object.getPrototypeOf(CustomSelect)).call(this, props));

    _this.state = {
      selectedItem: props.options ? props.options.find(function (item) {
        return item.value === props.value;
      }) : null,
      closed: true,
      filteredOptions: props.options || [],
      selectedIndex: 0
    };

    // Bindings
    _this.open = _this.open.bind(_this);
    _this.close = _this.close.bind(_this);
    _this.toggle = _this.toggle.bind(_this);
    _this.selectItem = _this.selectItem.bind(_this);
    _this.onType = _this.onType.bind(_this);
    _this.onEnterSearch = _this.onEnterSearch.bind(_this);
    _this.onScreenClick = _this.onScreenClick.bind(_this);
    _this.resetSelectedIndex = _this.resetSelectedIndex.bind(_this);
    return _this;
  }

  _createClass(CustomSelect, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var options = _ref.options,
          value = _ref.value;

      if (!(0, _isEqual2.default)(this.props.options, options)) {
        this.setState({
          filteredOptions: options,
          selectedItem: options.find(function (item) {
            return item.value === value;
          })
        });
      }
      if (this.props.value !== value) {
        this.setState({ selectedItem: this.props.options.find(function (item) {
            return item.value === value;
          }) });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('click', this.onScreenClick);
    }

    // Event handler for event keyup on search input

  }, {
    key: 'onType',
    value: function onType(evt) {
      switch (evt.keyCode) {
        // key up
        case 38:
          {
            var index = this.state.selectedIndex > 0 ? this.state.selectedIndex - 1 : this.state.filteredOptions.length - 1;
            this.setSelectedIndex(index);
            break;
          }
        // key down
        case 40:
          {
            var _index = this.state.selectedIndex < this.state.filteredOptions.length - 1 ? this.state.selectedIndex + 1 : 0;
            this.setSelectedIndex(_index);
            break;
          }
        // enter key
        case 13:
          {
            if (this.state.selectedIndex !== -1 && this.state.filteredOptions.length) {
              var selectedItem = this.state.filteredOptions[this.state.selectedIndex];
              this.resetSelectedIndex();
              this.selectItem(selectedItem);
            }
            break;
          }
        // esc key
        case 27:
          {
            this.close();
            break;
          }
        // Typing text
        default:
          {
            var value = evt.currentTarget.value;
            var filteredOptions = this.props.options.filter(function (item) {
              return item.label.toLowerCase().match(value.toLowerCase());
            });
            this.setState({ filteredOptions: filteredOptions });
            break;
          }
      }
    }
  }, {
    key: 'resetSelectedIndex',
    value: function resetSelectedIndex() {
      this.setSelectedIndex(0);
    }
  }, {
    key: 'setSelectedIndex',
    value: function setSelectedIndex(index) {
      this.setState({ selectedIndex: index });
    }

    // Event handler for enter event on search input

  }, {
    key: 'onEnterSearch',
    value: function onEnterSearch() {
      this.setState({ closed: false });
    }

    // Event handler for mouseup event on options list item

  }, {
    key: 'selectItem',
    value: function selectItem(item) {
      this.setState({ selectedItem: item });
      this.close();
      this.props.onValueChange && this.props.onValueChange(item);
    }
  }, {
    key: 'onScreenClick',
    value: function onScreenClick(evt) {
      if (this.el.contains && !this.el.contains(evt.target)) {
        this.close();
        window.removeEventListener('click', this.onScreenClick);
      }
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      return this.state.closed ? this.open() : this.close();
    }

    // Method than shows the option list

  }, {
    key: 'open',
    value: function open() {
      var _this2 = this;

      // Close select when clicking outside it
      window.addEventListener('click', this.onScreenClick);

      this.setState({ closed: false }, function () {
        _this2.input && _this2.input.focus();
      });
    }

    // Method that closes the options list

  }, {
    key: 'close',
    value: function close() {
      window.removeEventListener('click', this.onScreenClick);

      this.setState({
        closed: true,
        filteredOptions: this.props.options
      }, this.resetSelectedIndex);
      if (this.input) {
        this.input.value = '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      // Class names
      var cNames = ['c-custom-select -search'];
      this.props.className && cNames.push(this.props.className);
      this.state.closed && cNames.push('-closed');

      var noResults = !!(this.props.options.length && !this.state.filteredOptions.length);

      return _react2.default.createElement(
        'div',
        { ref: function ref(node) {
            _this3.el = node;
          }, className: cNames.join(' ') },
        _react2.default.createElement(
          'span',
          { className: 'custom-select-text', onClick: this.toggle },
          _react2.default.createElement(
            'span',
            null,
            this.state.selectedItem ? this.state.selectedItem.label : this.props.placeholder
          ),
          _react2.default.createElement('input', {
            ref: function ref(node) {
              _this3.input = node;
            },
            className: 'custom-select-search',
            type: 'search',
            onBlur: this.close,
            onFocus: this.onEnterSearch,
            onKeyDown: this.onType
          })
        ),
        noResults && _react2.default.createElement(
          'span',
          { className: 'no-results' },
          'No results'
        ),
        this.state.closed || _react2.default.createElement(
          'ul',
          { className: 'custom-select-options' },
          this.state.filteredOptions.map(function (item, index) {
            var cName = index === _this3.state.selectedIndex ? '-selected' : '';
            return _react2.default.createElement(
              'li',
              { className: cName, key: index, onMouseEnter: function onMouseEnter() {
                  _this3.setSelectedIndex(index);
                }, onMouseDown: function onMouseDown() {
                  return _this3.selectItem(item);
                } },
              item.label
            );
          })
        )
      );
    }
  }]);

  return CustomSelect;
}(_react2.default.Component);

exports.default = CustomSelect;


CustomSelect.propTypes = {
  options: _react2.default.PropTypes.array,
  onValueChange: _react2.default.PropTypes.func,
  value: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.string,
  placeholder: _react2.default.PropTypes.string
};