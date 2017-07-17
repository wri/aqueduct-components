'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = require('react-router');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Responsive = require('../Responsive');

var _Responsive2 = _interopRequireDefault(_Responsive);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _HeaderTools = require('./HeaderTools');

var _HeaderTools2 = _interopRequireDefault(_HeaderTools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = {
      active: ''
    };

    // BINDINGS
    _this.onClickBtnAction = _this.onClickBtnAction.bind(_this);
    return _this;
  }

  /**
   * UI EVENTS
   * - onClickBtnAction
  */


  _createClass(Header, [{
    key: 'onClickBtnAction',
    value: function onClickBtnAction(e) {
      var current = e.currentTarget.dataset.active;

      this.setState({
        active: current !== this.state.active ? current : ''
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var desktopNav = _react2.default.createElement(
        'nav',
        { role: 'navigation' },
        _react2.default.createElement(
          'ul',
          { className: 'list' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'button',
              { 'data-active': 'tools', className: 'c-header-button ' + (this.state.active === 'tools' && '-active'), onClick: this.onClickBtnAction },
              _react2.default.createElement(
                'span',
                null,
                'Tools'
              )
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { className: 'c-header-button', to: '/how-to' },
              'How to '
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { className: 'c-header-button', to: '/resource-library' },
              'Resource Library '
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { className: 'c-header-button', to: '/about' },
              'About us '
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { className: 'c-header-button', to: '/get-involved' },
              'Get involved '
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { className: 'c-header-button', to: '/search' },
              _react2.default.createElement(_Icon2.default, { name: 'icon-search' })
            )
          )
        )
      );

      return _react2.default.createElement(
        'header',
        { role: 'banner', className: 'l-header c-header' },
        _react2.default.createElement(
          'h1',
          { className: 'c-header-logo' },
          _react2.default.createElement(
            _reactRouter.Link,
            { className: 'header-logo', to: '/' },
            'Logo'
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { className: 'header-title', to: '/' },
            this.props.title
          )
        ),
        _react2.default.createElement(
          _Responsive2.default,
          { device: 'desktop' },
          desktopNav
        ),
        _react2.default.createElement(
          _Responsive2.default,
          { device: 'desktop' },
          _react2.default.createElement(_HeaderTools2.default, { active: this.state.active === 'tools' })
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;


Header.propTypes = {
  title: _propTypes2.default.string
};

Header.defaultProps = {
  title: ''
};