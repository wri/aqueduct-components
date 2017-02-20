'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar(props) {
    _classCallCheck(this, Sidebar);

    // BINDINGS
    var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));

    _this.triggerToggle = _this.triggerToggle.bind(_this);
    _this.triggerResize = (0, _debounce2.default)(_this.triggerResize.bind(_this), 100);

    _this.state = {
      opened: isNaN(props.opened) ? true : props.opened
    };
    return _this;
  }

  _createClass(Sidebar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.setSidebarWidth(this.sidebarNode.offsetWidth);
      window.addEventListener('resize', this.triggerResize);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resizeEvent);
      this.props.setSidebarWidth(0);
    }

    /**
     * UI EVENTS
     * - triggerToggle
    */

  }, {
    key: 'triggerToggle',
    value: function triggerToggle() {
      var _this2 = this;

      this.sidebarNode && this.setState({
        opened: !this.state.opened
      }, function () {
        _this2.props.setSidebarWidth(_this2.state.opened ? _this2.sidebarNode.offsetWidth : 50);
      });
    }
  }, {
    key: 'triggerResize',
    value: function triggerResize() {
      this.sidebarNode && this.props.setSidebarWidth(this.state.opened ? this.sidebarNode.offsetWidth : 50);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var asideCNames = ['l-sidebar', 'c-sidebar'];
      var btnCNames = ['l-sidebar-toggle', 'btn-toggle'];
      if (this.state.opened) {
        asideCNames.push('-opened');
        btnCNames.push('-opened');
      }

      return _react2.default.createElement(
        'aside',
        { ref: function ref(node) {
            _this3.sidebarNode = node;
          }, className: asideCNames.join(' ') },
        _react2.default.createElement(
          'button',
          { type: 'button', className: btnCNames.join(' '), onClick: this.triggerToggle },
          _react2.default.createElement(_Icon2.default, { className: '-medium', name: this.state.opened ? 'icon-cross' : 'icon-arrow-right' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'l-sidebar-content' },
          this.props.children
        )
      );
    }
  }]);

  return Sidebar;
}(_react2.default.Component);

exports.default = Sidebar;


Sidebar.propTypes = {
  opened: _react2.default.PropTypes.bool,
  children: _react2.default.PropTypes.array,
  setSidebarWidth: _react2.default.PropTypes.func
};