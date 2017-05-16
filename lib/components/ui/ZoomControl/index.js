'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ZoomControl = function (_React$Component) {
  _inherits(ZoomControl, _React$Component);

  function ZoomControl(props) {
    _classCallCheck(this, ZoomControl);

    // Bindings
    var _this = _possibleConstructorReturn(this, (ZoomControl.__proto__ || Object.getPrototypeOf(ZoomControl)).call(this, props));

    _this.increaseZoom = _this.increaseZoom.bind(_this);
    _this.decreaseZoom = _this.decreaseZoom.bind(_this);
    return _this;
  }

  /* Component lifecycle */


  _createClass(ZoomControl, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(newProps) {
      return this.props.zoom !== newProps.zoom;
    }
  }, {
    key: 'setZoom',
    value: function setZoom(zoom) {
      this.props.onZoomChange && this.props.onZoomChange(zoom);
    }
  }, {
    key: 'increaseZoom',
    value: function increaseZoom() {
      if (this.props.zoom === this.props.maxZoom) return;
      this.setZoom(this.props.zoom + 1);
    }
  }, {
    key: 'decreaseZoom',
    value: function decreaseZoom() {
      if (this.props.zoom === this.props.minZoom) return;
      this.setZoom(this.props.zoom - 1);
    }
  }, {
    key: 'render',
    value: function render() {
      var zoomInClass = (0, _classnames2.default)('zoom-control-btn', {
        '-disabled': this.props.zoom === this.props.maxZoom
      });

      var zoomOutClass = (0, _classnames2.default)('zoom-control-btn', {
        '-disabled': this.props.zoom === this.props.minZoom
      });

      return _react2.default.createElement(
        'div',
        { className: 'c-zoom-control' },
        _react2.default.createElement(
          'button',
          { className: zoomInClass, type: 'button', onClick: this.increaseZoom },
          _react2.default.createElement(_Icon2.default, { name: 'icon-plus' })
        ),
        _react2.default.createElement(
          'button',
          { className: zoomOutClass, type: 'button', onClick: this.decreaseZoom },
          _react2.default.createElement(_Icon2.default, { name: 'icon-minus' })
        )
      );
    }
  }]);

  return ZoomControl;
}(_react2.default.Component);

exports.default = ZoomControl;


ZoomControl.propTypes = {
  zoom: _react2.default.PropTypes.number,
  maxZoom: _react2.default.PropTypes.number,
  minZoom: _react2.default.PropTypes.number,
  onZoomChange: _react2.default.PropTypes.func
};

ZoomControl.defaultProps = {
  zoom: 3,
  maxZoom: 20,
  minZoom: 2
};