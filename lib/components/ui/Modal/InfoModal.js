'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfoModal = function (_React$Component) {
  _inherits(InfoModal, _React$Component);

  function InfoModal() {
    _classCallCheck(this, InfoModal);

    return _possibleConstructorReturn(this, (InfoModal.__proto__ || Object.getPrototypeOf(InfoModal)).apply(this, arguments));
  }

  _createClass(InfoModal, [{
    key: 'render',
    value: function render() {
      var notAvailable = 'Not available';

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
              this.props.info.title
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
              'Instructions:'
            ),
            _react2.default.createElement(
              'dd',
              null,
              this.props.info.instructions || notAvailable
            ),
            _react2.default.createElement(
              'dt',
              null,
              'Description:'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('dd', { dangerouslySetInnerHTML: { __html: this.props.info.description || notAvailable } }),
            _react2.default.createElement(
              'dt',
              null,
              'Citation:'
            ),
            _react2.default.createElement(
              'dd',
              null,
              this.props.info.citation || notAvailable
            )
          )
        )
      );
    }
  }]);

  return InfoModal;
}(_react2.default.Component);

exports.default = InfoModal;


InfoModal.propTypes = {
  info: _react2.default.PropTypes.object
};