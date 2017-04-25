'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HeaderToolsMenu;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HeaderToolsMenu(props) {
  return _react2.default.createElement(
    'div',
    { className: 'c-header-submenu ' + (props.active && '-active') },
    _react2.default.createElement(
      'a',
      { className: 'item -active', href: '#outside' },
      _react2.default.createElement(_Icon2.default, { className: 'c-big', name: 'icon-plus' }),
      _react2.default.createElement(
        'span',
        null,
        'Flood Risk Analyzer'
      )
    ),
    _react2.default.createElement(
      'a',
      { className: 'item', href: '#outside' },
      _react2.default.createElement(_Icon2.default, { className: 'c-big', name: 'icon-plus' }),
      _react2.default.createElement(
        'span',
        null,
        'Risk Atlas'
      )
    ),
    _react2.default.createElement(
      'a',
      { className: 'item', href: '#outside' },
      _react2.default.createElement(_Icon2.default, { className: 'c-big', name: 'icon-plus' }),
      _react2.default.createElement(
        'span',
        null,
        'Country basin risk profiles and Rankings'
      )
    ),
    _react2.default.createElement(
      'a',
      { className: 'item', href: '#outside' },
      _react2.default.createElement(_Icon2.default, { className: 'c-big', name: 'icon-plus' }),
      _react2.default.createElement(
        'span',
        null,
        'Supply Chain Water Risk Assesment'
      )
    ),
    _react2.default.createElement(
      'a',
      { className: 'item', href: '#outside' },
      _react2.default.createElement(_Icon2.default, { className: 'c-big', name: 'icon-plus' }),
      _react2.default.createElement(
        'span',
        null,
        'Water and Food Security Analyzer'
      )
    )
  );
}

HeaderToolsMenu.propTypes = {
  // ACTIONS
  active: _react2.default.PropTypes.bool
};