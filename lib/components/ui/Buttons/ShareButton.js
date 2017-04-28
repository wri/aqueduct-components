'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ShareButton;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ShareButton(props) {
  var className = (0, _classnames3.default)(_defineProperty({}, props.className, !!props.className));

  return _react2.default.createElement(
    'button',
    {
      className: className,
      type: 'button',
      onClick: props.onClick
    },
    _react2.default.createElement(_Icon2.default, { name: 'icon-share' })
  );
}

ShareButton.propTypes = {
  className: _react2.default.PropTypes.string,
  onClick: _react2.default.PropTypes.func
};