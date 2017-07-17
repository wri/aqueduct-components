'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MapControls;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function MapControls(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var _children = Array.isArray(children) || !children ? children : [children];
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('c-map-controls', _defineProperty({}, className, !!className)) },
    _children && _react2.default.createElement(
      'ul',
      { className: 'map-controls-list' },
      _children.map(function (c, i) {
        return _react2.default.createElement(
          'li',
          { className: 'map-controls-item', key: i },
          c
        );
      })
    )
  );
}

MapControls.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.any
};