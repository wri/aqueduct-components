'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordion = function (_React$Component) {
  _inherits(Accordion, _React$Component);

  function Accordion(props) {
    _classCallCheck(this, Accordion);

    var _this = _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call(this, props));

    _this.state = {
      opened: props.opened === undefined ? false : props.opened
    };
    // Bindings
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  _createClass(Accordion, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        opened: !this.state.opened
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var cNames = (0, _classnames2.default)('c-accordion', _defineProperty({
        '-closed': !this.state.opened
      }, this.props.className, this.props.className));
      return _react2.default.createElement(
        'div',
        { className: cNames },
        this.props.contentPosition === 'top' && _react2.default.createElement(
          'div',
          { className: 'accordion-content' },
          this.props.children
        ),
        _react2.default.createElement(
          'div',
          { className: 'accordion-header' },
          this.props.title && _react2.default.createElement(
            'span',
            { className: 'accordion-title' },
            this.props.title
          ),
          _react2.default.createElement(
            'button',
            { className: 'accordion-btn', type: 'button', onClick: this.toggle },
            this.props.toggleIcon
          )
        ),
        this.props.contentPosition === 'bottom' && _react2.default.createElement(
          'div',
          { className: 'accordion-content' },
          this.props.children
        )
      );
    }
  }]);

  return Accordion;
}(_react2.default.Component);

exports.default = Accordion;


Accordion.propTypes = {
  opened: _react2.default.PropTypes.bool,
  title: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.string,
  contentPosition: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.object,
  toggleIcon: _react2.default.PropTypes.object
};