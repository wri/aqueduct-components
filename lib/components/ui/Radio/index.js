'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = function (_React$Component) {
  _inherits(Radio, _React$Component);

  function Radio(props) {
    _classCallCheck(this, Radio);

    // BINDINGS
    var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  /**
   * UI EVENTS
   * - onChange
  */


  _createClass(Radio, [{
    key: 'onChange',
    value: function onChange(e) {
      this.props.onChange(e.currentTarget.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          value = _props.value,
          name = _props.name,
          label = _props.label,
          selected = _props.selected,
          disabled = _props.disabled;


      var className = (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, this.props.className, !!this.props.className), _defineProperty(_classnames, '-disabled', disabled), _classnames));

      return _react2.default.createElement(
        'div',
        { className: 'c-radio ' + className },
        _react2.default.createElement('input', {
          type: 'radio',
          name: name,
          id: 'radio-' + name + '-' + value,
          value: value,
          checked: value === selected,
          disabled: disabled,
          onChange: this.onChange
        }),
        _react2.default.createElement(
          'label',
          { htmlFor: 'radio-' + name + '-' + value },
          _react2.default.createElement('span', null),
          label
        )
      );
    }
  }]);

  return Radio;
}(_react2.default.Component);

exports.default = Radio;


Radio.propTypes = {
  name: _react2.default.PropTypes.string,
  value: _react2.default.PropTypes.string,
  label: _react2.default.PropTypes.string,
  selected: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.string,
  disabled: _react2.default.PropTypes.bool,
  onChange: _react2.default.PropTypes.func
};