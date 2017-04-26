'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SourceModal;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SourceModal(props) {
  var layer = props.layer;


  var notAvailable = '-';

  return _react2.default.createElement(
    'div',
    { className: 'c-info' },
    _react2.default.createElement(
      'div',
      { className: 'info-header' },
      _react2.default.createElement(
        'div',
        { className: 'info-titles' },
        _react2.default.createElement(
          'span',
          { className: 'info-title' },
          layer.name
        ),
        _react2.default.createElement(
          'span',
          { className: 'info-subtitle' },
          layer.subtitle
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'info-description' },
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement(
          'dt',
          null,
          'Description:'
        ),
        _react2.default.createElement(
          'dd',
          null,
          layer.metadata && layer.metadata.description ? layer.metadata.description : notAvailable
        ),
        _react2.default.createElement(
          'dt',
          null,
          'Language:'
        ),
        _react2.default.createElement(
          'dd',
          null,
          layer.metadata && layer.metadata.language ? layer.metadata.language : notAvailable
        ),
        _react2.default.createElement(
          'dt',
          null,
          'Source:'
        ),
        _react2.default.createElement(
          'dd',
          null,
          layer.metadata && layer.metadata.source ? layer.metadata.source : notAvailable
        ),
        _react2.default.createElement(
          'dt',
          null,
          'Citation:'
        ),
        _react2.default.createElement(
          'dd',
          null,
          layer.metadata && layer.metadata.citation ? layer.metadata.citation : notAvailable
        ),
        _react2.default.createElement(
          'dt',
          null,
          'License:'
        ),
        _react2.default.createElement(
          'dd',
          null,
          layer.metadata && layer.metadata.license ? layer.metadata.license : notAvailable
        )
      )
    )
  );
}

SourceModal.propTypes = {
  layer: _react2.default.PropTypes.object
};