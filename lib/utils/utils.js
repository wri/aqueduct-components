'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.substitution = substitution;
exports.concatenation = concatenation;
exports.capitalizeFirstLetter = capitalizeFirstLetter;
exports.dataURItoBlob = dataURItoBlob;
exports.saveAsFile = saveAsFile;

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

function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i += 1) {
    ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  return new Blob([ab], { type: mimeString });
}

function saveAsFile(obj, type, fileName) {
  var dataToBlob = dataURItoBlob(obj, type);
  var url = window.URL.createObjectURL(dataToBlob);
  // emulates trigger of download creating a link in memory and clicking on it
  var a = document.createElement('a');
  a.href = url;
  a.style.display = 'none';
  a.download = fileName;
  document.body.appendChild(a);
  a.click();

  // releases the existing object URL once we are not going to use it any longer.
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}