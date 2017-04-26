'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function get(_ref) {
  var url = _ref.url,
      _ref$headers = _ref.headers,
      headers = _ref$headers === undefined ? [] : _ref$headers,
      onSuccess = _ref.onSuccess,
      onError = _ref.onError;

  var request = new XMLHttpRequest();
  request.open('GET', url);
  // Set request headers
  headers.forEach(function (h) {
    request.setRequestHeader(h.key, h.value);
  });
  request.send(null);

  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      if (request.status === 200 || request.status === 201) {
        var data = JSON.parse(request.responseText);
        onSuccess(data);
      } else {
        onError('error');
      }
    }
  };

  return request;
}

function post(_ref2) {
  var type = _ref2.type,
      url = _ref2.url,
      body = _ref2.body,
      _ref2$headers = _ref2.headers,
      headers = _ref2$headers === undefined ? [] : _ref2$headers,
      onSuccess = _ref2.onSuccess,
      onError = _ref2.onError;

  var request = new XMLHttpRequest();
  request.open(type || 'POST', url);
  // Set request headers
  headers.forEach(function (h) {
    request.setRequestHeader(h.key, h.value);
  });
  request.send(JSON.stringify(body));

  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      if (request.status === 200 || request.status === 201) {
        var data = JSON.parse(request.responseText);
        onSuccess(data);
      } else {
        onError('error');
      }
    }
  };

  return request;
}

function remove(_ref3) {
  var url = _ref3.url,
      _ref3$headers = _ref3.headers,
      headers = _ref3$headers === undefined ? [] : _ref3$headers,
      onSuccess = _ref3.onSuccess,
      onError = _ref3.onError;

  var request = new XMLHttpRequest();
  request.open('DELETE', url);
  // Set request headers
  headers.forEach(function (h) {
    request.setRequestHeader(h.key, h.value);
  });

  request.send(null);

  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      if (request.status === 200 || request.status === 201) {
        var data = JSON.parse(request.responseText);
        onSuccess(data);
      } else {
        onError('error');
      }
    }
  };

  return request;
}

exports.get = get;
exports.post = post;
exports.remove = remove;