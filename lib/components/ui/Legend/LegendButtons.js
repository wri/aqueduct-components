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

var LegendButtons = function (_React$Component) {
  _inherits(LegendButtons, _React$Component);

  function LegendButtons(props) {
    _classCallCheck(this, LegendButtons);

    // BINDINGS
    var _this = _possibleConstructorReturn(this, (LegendButtons.__proto__ || Object.getPrototypeOf(LegendButtons)).call(this, props));

    _this.triggerAction = _this.triggerAction.bind(_this);
    return _this;
  }

  _createClass(LegendButtons, [{
    key: 'triggerAction',
    value: function triggerAction(e) {
      var action = e.currentTarget.dataset.action;
      this.props.triggerAction(action);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { className: 'c-legend-buttons' },
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'button',
            { 'data-action': 'info', className: 'legend-button', onClick: this.triggerAction },
            _react2.default.createElement(_Icon2.default, { name: 'icon-info' })
          )
        )
      );
    }
  }]);

  return LegendButtons;
}(_react2.default.Component);

LegendButtons.propTypes = {
  // PROPS
  triggerAction: _react2.default.PropTypes.func
};

exports.default = LegendButtons;