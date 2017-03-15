'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _Checkbox = require('../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxGroup = function (_React$Component) {
  _inherits(CheckboxGroup, _React$Component);

  function CheckboxGroup(props) {
    _classCallCheck(this, CheckboxGroup);

    // Initial state
    var _this = _possibleConstructorReturn(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call(this, props));

    _this.state = {
      checked: _this.props.selected || []
    };
    // BINDINGS
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(CheckboxGroup, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _isEqual2.default)(nextProps.selected, this.props.selected)) {
        this.setState({
          checked: nextProps.selected
        });
      }
    }

    /**
     * UI EVENTS
     * - onChange
    */

  }, {
    key: 'onChange',
    value: function onChange(newItem) {
      // Send objects
      var selectedObj = this.props.items.find(function (item) {
        return item.value === newItem.value;
      });
      var newChecked = this.state.checked.slice(0);
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
  }, {
    key: 'getCheckbox',
    value: function getCheckbox() {
      var _this2 = this;

      return this.props.items.map(function (item, i) {
        return _react2.default.createElement(_Checkbox2.default, {
          key: i,
          name: _this2.props.name,
          value: item.value,
          checked: _this2.state.checked.includes(item.value),
          label: item.label,
          onChange: function onChange(newSelected) {
            return _this2.onChange(newSelected);
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'c-checkbox-box ' + (this.props.className ? this.props.className : '') },
        this.props.title && _react2.default.createElement(
          'span',
          { className: 'checkbox-box-title' },
          this.props.title
        ),
        this.getCheckbox()
      );
    }
  }]);

  return CheckboxGroup;
}(_react2.default.Component);

exports.default = CheckboxGroup;


CheckboxGroup.propTypes = {
  name: _react2.default.PropTypes.string,
  title: _react2.default.PropTypes.string,
  selected: _react2.default.PropTypes.array,
  className: _react2.default.PropTypes.string,
  items: _react2.default.PropTypes.array,
  onChange: _react2.default.PropTypes.func
};