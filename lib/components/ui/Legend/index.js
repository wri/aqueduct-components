'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _orderBy = require('lodash/orderBy');

var _orderBy2 = _interopRequireDefault(_orderBy);

var _LegendItem = require('./LegendItem');

var _LegendItem2 = _interopRequireDefault(_LegendItem);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Responsive = require('../Responsive');

var _Responsive2 = _interopRequireDefault(_Responsive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Legend = function (_React$Component) {
  _inherits(Legend, _React$Component);

  function Legend(props) {
    _classCallCheck(this, Legend);

    var _this = _possibleConstructorReturn(this, (Legend.__proto__ || Object.getPrototypeOf(Legend)).call(this, props));

    _this.state = {
      selectedLayer: null,
      expanded: props.expanded
    };
    return _this;
  }

  _createClass(Legend, [{
    key: 'toggleExpand',
    value: function toggleExpand() {
      this.setState({
        expanded: !this.state.expanded
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var layers = (0, _orderBy2.default)(this.props.layers, ['category'], ['desc']);
      var isModal = this.props.isModal;

      return _react2.default.createElement(
        'div',
        { className: 'c-legend ' + this.props.className + ' ' + (this.state.expanded ? '-expanded' : '') },
        !isModal && _react2.default.createElement(
          _Responsive2.default,
          { device: 'desktop' },
          _react2.default.createElement(
            'div',
            { className: 'legend-header', onClick: function onClick() {
                return _this2.toggleExpand();
              } },
            _react2.default.createElement(
              'span',
              { className: 'legend-header-title' },
              this.state.expanded ? 'Legend' : 'View Legend'
            ),
            _react2.default.createElement(
              'button',
              { className: 'legend-btn' },
              _react2.default.createElement(_Icon2.default, { name: 'icon-arrow-up-2', className: 'legend-open-icon' }),
              _react2.default.createElement(_Icon2.default, { name: 'icon-arrow-down-2', className: 'legend-close-icon' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'legend-content' },
          _react2.default.createElement(
            'ul',
            null,
            layers.map(function (layer, i) {
              return layer.category !== 'mask' && _react2.default.createElement(_LegendItem2.default, {
                filters: _this2.props.filters,
                layer: layer,
                key: i,
                onToggleInfo: _this2.props.onToggleInfo
              });
            })
          )
        )
      );
    }
  }]);

  return Legend;
}(_react2.default.Component);

exports.default = Legend;


Legend.defaultProps = {
  layers: [],
  filters: [],
  className: '',
  expanded: false,
  onToggleInfo: null
};

Legend.propTypes = {
  layers: _propTypes2.default.array,
  filters: _propTypes2.default.object,
  className: _propTypes2.default.string,
  expanded: _propTypes2.default.bool,
  isModal: _propTypes2.default.bool,
  onToggleInfo: _propTypes2.default.func
};