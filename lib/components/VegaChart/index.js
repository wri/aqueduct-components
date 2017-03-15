'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _vega = require('vega');

var _vega2 = _interopRequireDefault(_vega);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VegaChart = function (_React$Component) {
  _inherits(VegaChart, _React$Component);

  function VegaChart() {
    _classCallCheck(this, VegaChart);

    return _possibleConstructorReturn(this, (VegaChart.__proto__ || Object.getPrototypeOf(VegaChart)).apply(this, arguments));
  }

  _createClass(VegaChart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.resizeEvent = function () {
        _this2.handleResize();
      };
      window.addEventListener('resize', (0, _debounce2.default)(this.resizeEvent, 100));

      this.renderChart();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _isEqual2.default)(nextProps.data, this.props.data);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // We should check if the data has changed
      this.renderChart();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resizeEvent);
    }
  }, {
    key: 'setSize',
    value: function setSize() {
      if (this.chart) {
        this.width = this.chart.offsetWidth;
        this.height = this.chart.offsetHeight;
      }
    }
  }, {
    key: 'parseVega',
    value: function parseVega() {
      var _this3 = this;

      var defaultPadding = { left: 20, right: 20 };
      var padding = this.props.data.padding || defaultPadding;
      var size = {
        width: this.width - padding.left - padding.right,
        height: this.props.data.height || 260
      };
      var data = Object.assign({}, this.props.data, size);

      this.props.toggleLoading && this.props.toggleLoading(true);
      _vega2.default.parse.spec(data, this.props.theme, function (err, chart) {
        _this3.props.toggleLoading && _this3.props.toggleLoading(false);
        if (!err) {
          _this3.vis = chart({
            el: _this3.chart,
            renderer: 'canvas'
          });
          _this3.vis.update();
        }
      });
    }
  }, {
    key: 'handleResize',
    value: function handleResize() {
      this.renderChart();
    }
  }, {
    key: 'renderChart',
    value: function renderChart() {
      this.setSize();
      this.parseVega();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        { className: 'c-chart' },
        _react2.default.createElement('div', { ref: function ref(c) {
            _this4.chart = c;
          }, className: 'chart' })
      );
    }
  }]);

  return VegaChart;
}(_react2.default.Component);

exports.default = VegaChart;


VegaChart.propTypes = {
  // Define the chart data
  data: _react2.default.PropTypes.any.isRequired,
  toggleLoading: _react2.default.PropTypes.func,
  theme: _react2.default.PropTypes.object
};