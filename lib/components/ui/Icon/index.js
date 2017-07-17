'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Icon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Icon(_ref) {
  var name = _ref.name,
      className = _ref.className;

  return _react2.default.createElement(
    'svg',
    { className: 'c-icon ' + (className || '') },
    _react2.default.createElement('use', { xlinkHref: '#' + name })
  );
}

Icon.propTypes = {
  // STORE
  name: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.string
};