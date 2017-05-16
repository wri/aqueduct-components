'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var Field = function (_React$Component) {
  _inherits(Field, _React$Component);

  function Field(props) {
    _classCallCheck(this, Field);

    var _this = _possibleConstructorReturn(this, (Field.__proto__ || Object.getPrototypeOf(Field)).call(this, props));

    _this.state = {
      value: _this.props.properties.default,
      valid: null,
      error: []
    };

    // BINDINGS
    _this.onValid = _this.onValid.bind(_this);
    return _this;
  }

  /**
   * UI EVENTS
   * - onValid (valid, error)
  */


  _createClass(Field, [{
    key: 'onValid',
    value: function onValid(valid, error) {
      this.setState({
        valid: valid,
        error: error
      });
    }
  }, {
    key: 'validate',
    value: function validate() {
      this.child.triggerValidate();
    }
  }, {
    key: 'isValid',
    value: function isValid() {
      return this.state.valid;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames,
          _this2 = this;

      var _props = this.props,
          properties = _props.properties,
          hint = _props.hint,
          sufix = _props.sufix,
          className = _props.className;
      var _state = this.state,
          valid = _state.valid,
          error = _state.error;

      // Set classes

      var classNames = (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, className, !!className), _defineProperty(_classnames, '-valid', valid === true), _defineProperty(_classnames, '-error', valid === false), _classnames));

      return _react2.default.createElement(
        'div',
        { className: 'c-field ' + classNames },
        properties.label && _react2.default.createElement(
          'label',
          { htmlFor: 'input-' + properties.name, className: 'label' },
          properties.label,
          ' ',
          properties.required && _react2.default.createElement(
            'abbr',
            { title: 'required' },
            '*'
          )
        ),
        hint && _react2.default.createElement('p', { className: 'hint', dangerouslySetInnerHTML: { __html: hint } }),
        _react2.default.createElement(this.props.children, _extends({}, this.props, {
          ref: function ref(c) {
            if (c) _this2.child = c;
          },
          onValid: this.onValid
        })),
        sufix && _react2.default.createElement(
          'p',
          { className: 'sufix' },
          sufix
        ),
        error && error.map(function (err, i) {
          if (err) {
            return _react2.default.createElement(
              'p',
              { key: i, className: 'error' },
              err.message
            );
          }
          return null;
        })
      );
    }
  }]);

  return Field;
}(_react2.default.Component);

Field.propTypes = {
  properties: _react2.default.PropTypes.object.isRequired,
  hint: _react2.default.PropTypes.string,
  sufix: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.string
};

exports.default = Field;