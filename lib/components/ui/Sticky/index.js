'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sticky = function (_React$Component) {
  _inherits(Sticky, _React$Component);

  function Sticky(props) {
    _classCallCheck(this, Sticky);

    var _this = _possibleConstructorReturn(this, (Sticky.__proto__ || Object.getPrototypeOf(Sticky)).call(this, props));

    _this.state = {
      isSticked: _this.props.isSticked
    };
    return _this;
  }

  _createClass(Sticky, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._setVars();
      this._setEventListeners();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.ScrollElem.removeEventListener('scroll', this.throttledScroll);
    }
  }, {
    key: '_setVars',
    value: function _setVars() {
      var _this2 = this;

      this.ScrollElem = this.props.ScrollElem ? document.querySelector(this.props.ScrollElem) : window;

      this.throttledScroll = _lodash2.default.throttle(function () {
        return _this2._onScroll();
      }, 50);
    }
  }, {
    key: '_setEventListeners',
    value: function _setEventListeners() {
      this.ScrollElem.addEventListener('scroll', this.throttledScroll);
    }
  }, {
    key: '_onScroll',
    value: function _onScroll() {
      var _this3 = this;

      var currentScroll = this.ScrollElem.scrollTop;

      if (this.props.bottomLimit) {
        if (currentScroll >= this.props.topLimit && currentScroll < this.props.bottomLimit && this.state.isSticked === false) {
          this.setState({ isSticked: true }, function () {
            _this3.props.onStick && _this3.props.onStick(_this3.state.isSticked);
          });
        }

        if (currentScroll >= this.props.bottomLimit && this.state.isSticked === true) {
          this.setState({ isSticked: false }, function () {
            _this3.props.onStick && _this3.props.onStick(_this3.state.isSticked);
          });
        }
      } else {
        if (currentScroll >= this.props.topLimit && this.state.isSticked === false) {
          this.setState({ isSticked: true }, function () {
            _this3.props.onStick && _this3.props.onStick(_this3.state.isSticked);
          });
        }
        if (currentScroll < this.props.topLimit && this.state.isSticked === true) {
          this.setState({ isSticked: false }, function () {
            _this3.props.onStick && _this3.props.onStick(_this3.state.isSticked);
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          className: 'c-sticky ' + this.props.className + '\n          ' + (this.state.isSticked ? this.props.customFixedClassName : '')
        },
        this.props.children
      );
    }
  }]);

  return Sticky;
}(_react2.default.Component);

exports.default = Sticky;


Sticky.defaultProps = {
  customFixedClassName: '-sticked',
  isSticked: false
};

Sticky.propTypes = {
  bottomLimit: _propTypes2.default.number,
  className: _propTypes2.default.string,
  children: _propTypes2.default.any,
  customFixedClassName: _propTypes2.default.string,
  isSticked: _propTypes2.default.bool,
  onStick: _propTypes2.default.func,
  ScrollElem: _propTypes2.default.string,
  topLimit: _propTypes2.default.number
};