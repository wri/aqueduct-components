'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CountrySelect;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CustomSelect = require('../ui/CustomSelect');

var _CustomSelect2 = _interopRequireDefault(_CustomSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CountrySelect(props) {
  var countryList = props.countries.list.map(function (item) {
    return { value: item.id, label: item.name };
  });

  var parsedProps = {
    options: countryList,
    placeholder: props.placeholder || 'Select a Country',
    search: true
  };

  // Include all other CustomSelect props
  parsedProps = Object.assign({}, props, parsedProps);

  return _react2.default.createElement(_CustomSelect2.default, parsedProps);
}

CountrySelect.propTypes = {
  countries: _react2.default.PropTypes.object,
  placeholder: _react2.default.PropTypes.string
};