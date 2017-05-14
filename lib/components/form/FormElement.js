'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _pick = require('lodash/pick');

var _pick2 = _interopRequireDefault(_pick);

var _Validator = require('./Validator');

var _Validator2 = _interopRequireDefault(_Validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormElement = function (_React$Component) {
  _inherits(FormElement, _React$Component);

  function FormElement(props) {
    _classCallCheck(this, FormElement);

    var _this = _possibleConstructorReturn(this, (FormElement.__proto__ || Object.getPrototypeOf(FormElement)).call(this, props));

    _this.state = {
      value: _this.props.properties.default,
      valid: null,
      error: []
    };

    // VALIDATOR
    _this.validator = new _Validator2.default();

    // BINDINGS
    _this.triggerChange = _this.triggerChange.bind(_this);
    _this.triggerValidate = _this.triggerValidate.bind(_this);
    return _this;
  }

  _createClass(FormElement, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.value && this.state.value.length) {
        this.triggerValidate();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var hasValue = Object.prototype.hasOwnProperty.call(nextProps.properties, 'value');
      var isNew = nextProps.properties.value !== this.state.value;
      if (hasValue && isNew) {
        this.setState({
          value: nextProps.properties.value
        }, function () {
          _this2.triggerValidate();
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var prevPropsParsed = (0, _pick2.default)(prevProps, ['properties', 'validations']);
      var currentPropsParsed = (0, _pick2.default)(this.props, ['properties', 'validations']);

      if (!(0, _isEqual2.default)(prevPropsParsed, currentPropsParsed)) {
        this.triggerValidate();
      }
    }
  }, {
    key: 'triggerValidate',
    value: function triggerValidate() {
      var _this3 = this;

      var validations = this.props.validations;
      var value = this.state.value;


      var isValuePresent = Array.isArray(value) ? value.length > 0 : value;
      var valid = void 0;
      var error = void 0;

      // Check if it has validations &&
      //       if a value is defined ||
      //       if required validation is present
      if (validations && (isValuePresent || validations.indexOf('required') !== -1)) {
        var validateArr = this.validator.validate(validations, value);
        valid = validateArr.every(function (element) {
          return element.valid;
        });
        error = !valid ? validateArr.map(function (element) {
          return element.error;
        }) : [];
      } else {
        valid = isValuePresent ? true : null;
        error = [];
      }

      // Save the valid and the error in the state
      this.setState({
        valid: valid,
        error: error
      }, function () {
        if (_this3.props.onValid) _this3.props.onValid(valid, error);
      });
    }
  }, {
    key: 'isValid',
    value: function isValid() {
      return this.state.valid;
    }
  }]);

  return FormElement;
}(_react2.default.Component);

FormElement.propTypes = {
  properties: _react2.default.PropTypes.object.isRequired,
  validations: _react2.default.PropTypes.array,
  onValid: _react2.default.PropTypes.func
};

exports.default = FormElement;