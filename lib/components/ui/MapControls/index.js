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

var _ZoomControl = require('../ZoomControl');

var _ZoomControl2 = _interopRequireDefault(_ZoomControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function MapControls(_ref) {
  var zoom = _ref.zoom,
      onZoomChange = _ref.onZoomChange,
      zoomControl = _ref.zoomControl,
      className = _ref.className,
      children = _ref.children;

  var _children = Array.isArray(children) || !children ? children : [children];
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('c-map-controls', _defineProperty({}, className, !!className)) },
    zoomControl && _react2.default.createElement(_ZoomControl2.default, {
      zoom: zoom,
      onZoomChange: onZoomChange
    }),
    _children && _react2.default.createElement(
      'ul',
      { className: 'map-actions-list' },
      _children.map(function (c, i) {
        return _react2.default.createElement(
          'li',
          { className: 'map-actions-item', key: i },
          c
        );
      })
    )
  );
}

MapControls.defaultProps = {
  zoomControl: true
};

MapControls.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.any,
  onZoomChange: _propTypes2.default.func,
  zoom: _propTypes2.default.number,
  zoomControl: _propTypes2.default.bool
};