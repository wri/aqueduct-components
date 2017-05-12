'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    // BINDINGS
    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  /**
   * UI EVENTS
   * - onChange
  */


  _createClass(Checkbox, [{
    key: 'onChange',
    value: function onChange(evt) {
      this.props.onChange && this.props.onChange({ value: this.props.value, checked: evt.currentTarget.checked });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          name = _props.name,
          label = _props.label,
          checked = _props.checked,
          defaultChecked = _props.defaultChecked,
          className = _props.className;

      var cNames = ['c-checkbox'];
      if (className) {
        cNames.push(className);
      }
      return _react2.default.createElement(
        'div',
        { className: cNames.join(' ') },
        _react2.default.createElement('input', {
          type: 'checkbox',
          name: name,
          id: 'checkbox-' + name + '-' + value,
          value: value,
          defaultChecked: defaultChecked,
          checked: checked,
          onChange: this.onChange
        }),
        _react2.default.createElement(
          'label',
          { htmlFor: 'checkbox-' + name + '-' + value },
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(_Icon2.default, { name: 'icon-checkbox' })
          ),
          label
        )
      );
    }
  }]);

  return Checkbox;
}(_react2.default.Component);

exports.default = Checkbox;


Checkbox.propTypes = {
  name: _react2.default.PropTypes.string,
  value: _react2.default.PropTypes.string,
  label: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.string,
  checked: _react2.default.PropTypes.bool,
  defaultChecked: _react2.default.PropTypes.bool,
  onChange: _react2.default.PropTypes.func
};