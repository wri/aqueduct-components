"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioGroup = function (_React$Component) {
  _inherits(RadioGroup, _React$Component);

  function RadioGroup(props) {
    _classCallCheck(this, RadioGroup);

    var _this = _possibleConstructorReturn(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call(this, props));

    _this.state = {
      selected: props.defaultValue
    };

    // BINDINGS
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  /**
   * UI EVENTS
   * - onChange
  */


  _createClass(RadioGroup, [{
    key: "onChange",
    value: function onChange(e) {
      // Set the current selected object
      var selectedObj = this.props.items.find(function (item) {
        return item.value.toString() === e.currentTarget.value;
      });

      // Set state
      this.setState({
        selected: selectedObj.value.toString()
      });

      // Trigger change selected if it's needed
      this.props.onChange && this.props.onChange(selectedObj);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          name = _props.name,
          items = _props.items;
      var selected = this.state.selected;


      return _react2.default.createElement(
        "div",
        { className: "c-radio-box " + this.props.className },
        items.map(function (item, i) {
          return _react2.default.createElement(
            "div",
            { key: i, className: "c-radio" },
            _react2.default.createElement("input", {
              type: "radio",
              name: name,
              id: "radio-" + name + "-" + item.value,
              value: item.value,
              checked: item.value.toString() === selected,
              onChange: _this2.onChange
            }),
            _react2.default.createElement(
              "label",
              { htmlFor: "radio-" + name + "-" + item.value },
              _react2.default.createElement("span", null),
              item.label
            )
          );
        })
      );
    }
  }]);

  return RadioGroup;
}(_react2.default.Component);

exports.default = RadioGroup;


RadioGroup.propTypes = {
  items: _react2.default.PropTypes.array.isRequired,
  name: _react2.default.PropTypes.string.isRequired,
  defaultValue: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func
};