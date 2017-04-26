'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.substitution = substitution;
exports.concatenation = concatenation;
exports.capitalizeFirstLetter = capitalizeFirstLetter;

var _compact = require('lodash/compact');

var _compact2 = _interopRequireDefault(_compact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function substitution(string, params) {
  // Params should have this format => [{key:'xxx', value:'xxx'},{key:'xxx', value:'xxx'}]
  // Keys to search should be in this format {{key}}
  var str = string;
  params.forEach(function (param) {
    str = str.replace(new RegExp('{{' + param.key + '}}', 'g'), param.value);
  });
  return str;
}

function concatenation(string, params) {
  // Params should have this format => [{key:'xxx', key_params:[{key:'xxx', value:'xxx'},{key:'xxx', value:'xxx'}]}]
  // Keys to search should be in this format {{key}}
  var str = string;
  var sql = void 0;
  params.forEach(function (param) {
    sql = '' + (0, _compact2.default)(param.keyParams.map(function (p) {
      var value = p.value;
      if (value) {
        return isNaN(value) ? p.key + ' = \'' + value + '\'' : p.key + ' = ' + value;
      }
      return null;
    })).join(' AND ');
    if (sql && param.key.startsWith('where')) sql = 'WHERE ' + sql;else if (sql && param.key.startsWith('and')) sql = 'AND ' + sql;else sql = '';

    str = str.replace(new RegExp('{{' + param.key + '}}', 'g'), sql);
  });
  return str;
}

function capitalizeFirstLetter(string) {
  if (typeof string !== 'string') {
    return string;
  }
  var str = string;
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str;
}