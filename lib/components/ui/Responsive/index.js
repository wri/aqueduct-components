'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OnlyOn;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactResponsive = require('react-responsive');

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BREAKPOINT_MOBILE = 640;

function OnlyOn(props) {
  var breakpoints = {
    mobile: '(max-width: ' + BREAKPOINT_MOBILE + 'px)',
    desktop: '(min-width: ' + (BREAKPOINT_MOBILE + 1) + 'px)'
  };
  return _react2.default.createElement(
    _reactResponsive2.default,
    { query: breakpoints[props.device] },
    props.children
  );
}

OnlyOn.propTypes = {
  // STORE
  children: _react2.default.PropTypes.object,
  device: _react2.default.PropTypes.string.isRequired
};