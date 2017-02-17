'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CustomSelect;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SimpleSelect = require('./SimpleSelect');

var _SimpleSelect2 = _interopRequireDefault(_SimpleSelect);

var _SearchSelect = require('./SearchSelect');

var _SearchSelect2 = _interopRequireDefault(_SearchSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function CustomSelect(props) {
  var search = props.search,
      newProps = _objectWithoutProperties(props, ['search']);

  return search ? _react2.default.createElement(_SearchSelect2.default, newProps) : _react2.default.createElement(_SimpleSelect2.default, newProps);
}

CustomSelect.propTypes = {
  search: _react2.default.PropTypes.bool
};