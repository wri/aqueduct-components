'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Spinner;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Spinner(_ref) {
  var _classNames;

  var isLoading = _ref.isLoading,
      className = _ref.className,
      style = _ref.style;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('c-spinner', (_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, '-loading', isLoading), _classNames)) },
    _react2.default.createElement(
      'div',
      { className: 'spinner-box', style: style },
      _react2.default.createElement('div', { className: 'icon' })
    )
  );
}

Spinner.propTypes = {
  className: _propTypes2.default.string,
  isLoading: _propTypes2.default.bool,
  style: _propTypes2.default.object
};