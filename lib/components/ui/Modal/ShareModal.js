'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _clipboard = require('clipboard');

var _clipboard2 = _interopRequireDefault(_clipboard);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShareModal = function (_React$Component) {
  _inherits(ShareModal, _React$Component);

  function ShareModal(props) {
    _classCallCheck(this, ShareModal);

    var _this = _possibleConstructorReturn(this, (ShareModal.__proto__ || Object.getPrototypeOf(ShareModal)).call(this, props));

    _this.state = {
      copied: false
    };
    return _this;
  }

  _createClass(ShareModal, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.getShareUrl(location.href);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.clipboard = new _clipboard2.default(this.btn);
      this.clipboard.on('success', function (e) {
        _this2.setState({ copied: true });
        setTimeout(function () {
          _this2.setState({ copied: false });
          e.clearSelection();
        }, 2000);
      });

      this.clipboard.on('error', function () {
        _this2.setState({ error: true });
        setTimeout(function () {
          _this2.setState({ error: false });
        }, 2000);
      });
    }

    // UI EVENTS

  }, {
    key: 'triggerPopup',
    value: function triggerPopup(e) {
      e && e.preventDefault();
      var width = 575;
      var height = 400;
      var left = (window.innerWidth - width) / 2;
      var top = (window.innerHeight - height) / 2;

      var url = e.currentTarget.href;
      var opts = 'status=1,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;

      window.open(url, 'Share this analysis', opts);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var title = 'Water and Food Security Analyzer';
      var url = this.props.share.url || location.href;
      var urlEncoded = encodeURIComponent(this.props.share.url || location.href);

      var text = 'Copy';
      var classCopy = '';

      if (this.state.copied) {
        text = 'Copied';
        classCopy = '-success';
      }
      if (this.state.error) {
        text = 'Error';
        classCopy = '-error';
      }

      return _react2.default.createElement(
        'div',
        { className: 'c-share' },
        _react2.default.createElement(
          'div',
          { className: 'share-header' },
          _react2.default.createElement(
            'h3',
            { className: 'share-title' },
            'Share this page'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'share-content' },
          _react2.default.createElement(
            'div',
            { className: 'share-button' },
            _react2.default.createElement('input', {
              id: 'url',
              className: 'share-url',
              value: url,
              readOnly: true,
              onFocus: function onFocus(e) {
                return e.currentTarget.select();
              }
            }),
            _react2.default.createElement(
              'button',
              {
                'data-clipboard-target': '#url',
                ref: function ref(node) {
                  _this3.btn = node;
                },
                className: 'c-btn -primary ' + classCopy,
                type: 'button'
              },
              text
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'share-sozial' },
            _react2.default.createElement(
              'a',
              {
                href: 'https://twitter.com/share?url=' + urlEncoded,
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'c-btn -primary -with-icon -twitter -social',
                onClick: this.triggerPopup
              },
              _react2.default.createElement(_Icon2.default, { name: 'icon-twitter' }),
              _react2.default.createElement(
                'span',
                null,
                'Twitter'
              )
            ),
            _react2.default.createElement(
              'a',
              {
                href: 'https://www.facebook.com/sharer/sharer.php?u=' + urlEncoded + '&t=' + title,
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'c-btn -primary -with-icon -facebook -social',
                onClick: this.triggerPopup
              },
              _react2.default.createElement(_Icon2.default, { name: 'icon-facebook' }),
              _react2.default.createElement(
                'span',
                null,
                'Facebook'
              )
            ),
            _react2.default.createElement(
              'a',
              {
                href: 'https://www.linkedin.com/shareArticle?mini=true&url=' + urlEncoded + '&title=' + title + '&summary=&source=',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'c-btn -primary -with-icon -linkedin -social',
                onClick: this.triggerPopup
              },
              _react2.default.createElement(_Icon2.default, { name: 'icon-linkedin' }),
              _react2.default.createElement(
                'span',
                null,
                'Linkedin'
              )
            )
          )
        )
      );
    }
  }]);

  return ShareModal;
}(_react2.default.Component);

exports.default = ShareModal;


ShareModal.propTypes = {
  share: _react2.default.PropTypes.object,
  getShareUrl: _react2.default.PropTypes.func
};