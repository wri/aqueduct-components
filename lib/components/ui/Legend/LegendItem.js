'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d3Format = require('d3-format');

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _capitalize = require('lodash/capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _legend = require('../../../data/legend');

var _filters = require('../../../data/filters');

var _request = require('../../../utils/request');

var _filters2 = require('../../../utils/filters');

var _LegendButtons = require('./LegendButtons');

var _LegendButtons2 = _interopRequireDefault(_LegendButtons);

var _LegendGraph = require('./LegendGraph');

var _LegendGraph2 = _interopRequireDefault(_LegendGraph);

var _Spinner = require('../Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Data


// Utils


// Components


var LegendItem = function (_React$Component) {
  _inherits(LegendItem, _React$Component);

  function LegendItem(props) {
    _classCallCheck(this, LegendItem);

    var _this = _possibleConstructorReturn(this, (LegendItem.__proto__ || Object.getPrototypeOf(LegendItem)).call(this, props));

    _this.state = {
      error: null,
      loading: true,
      layer: _this.props.layer
    };

    // BINDINGS
    _this.triggerAction = _this.triggerAction.bind(_this);
    return _this;
  }

  _createClass(LegendItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getLegendData();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ((0, _isEqual2.default)(this.props, nextProps)) return;
      var newState = _extends({}, nextProps, {
        loading: true
      });
      this.setState(newState, this.getLegendData);
    }
  }, {
    key: 'getLegendData',
    value: function getLegendData() {
      var _this2 = this;

      var _state$layer = this.state.layer,
          layerConfig = _state$layer.layerConfig,
          legendConfig = _state$layer.legendConfig;

      if (!legendConfig.sqlQuery) {
        this.setState({
          loading: false
        });
        return;
      }

      var legendConfigConverted = (0, _filters2.getObjectConversion)(legendConfig, this.props.filters, 'water');
      var sqlQuery = legendConfigConverted.sqlQuery;
      var crop = this.props.filters.crop;


      (0, _request.get)({
        url: 'https://' + layerConfig.account + '.carto.com/api/v2/sql?q=' + sqlQuery,
        onSuccess: function onSuccess(data) {
          var buckets = data.rows[0].bucket;

          if (buckets === null || !buckets.length) {
            _this2.setState({
              loading: false,
              error: 'Data not available',
              layer: _extends({}, _this2.state.layer, {
                name: (0, _capitalize2.default)(crop)
              })
            });

            return;
          }

          var color = _filters.CROP_OPTIONS.find(function (c) {
            return c.value === crop;
          }).color;
          var items = buckets.map(function (bucket, i) {
            return { value: '(>= ' + (0, _d3Format.format)('.3s')(bucket) + ')', color: _this2._applyOpacity(color, _legend.LEGEND_OPACITY_RANGE[i]), name: '' };
          });

          var newlegendConfig = _extends({}, legendConfig, { items: items });

          _this2.setState({
            error: null,
            loading: false,
            layer: _extends({}, _this2.state.layer, {
              legendConfig: newlegendConfig,
              name: (0, _capitalize2.default)(crop)
            })
          });
        },
        onError: function onError(err) {
          throw err;
        }
      });
    }
  }, {
    key: '_applyOpacity',
    value: function _applyOpacity(hex, opacity) {
      // Splits in 2-length chunks the hexadecimal
      var hexArray = hex.split('#')[1].match(/.{1,2}/g);
      // Converts from hex to RGB every chunk
      var rgb = hexArray.map(function (h) {
        return parseInt(h, 16);
      });

      return 'rgba(' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ', ' + opacity + ')';
    }
  }, {
    key: 'triggerAction',
    value: function triggerAction(action) {
      if (action === 'info') {
        this.props.onToggleInfo && this.props.onToggleInfo({
          layer: this.props.layer
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        { className: 'c-legend-item' },
        _react2.default.createElement(
          'header',
          { className: 'legend-item-header' },
          _react2.default.createElement(
            'h3',
            null,
            this.state.layer.category && _react2.default.createElement(
              'span',
              { className: 'category' },
              _filters.CATEGORIES[this.state.layer.category],
              ' -'
            ),
            _react2.default.createElement(
              'span',
              { className: 'name' },
              this.state.layer.name
            )
          ),
          _react2.default.createElement(_LegendButtons2.default, { triggerAction: this.triggerAction })
        ),
        !this.state.error ? _react2.default.createElement(_LegendGraph2.default, { config: this.state.layer.legendConfig }) : _react2.default.createElement(
          'span',
          { className: 'error-message' },
          this.state.error
        ),
        _react2.default.createElement(_Spinner2.default, { isLoading: this.state.loading })
      );
    }
  }]);

  return LegendItem;
}(_react2.default.Component);

LegendItem.propTypes = {
  layer: _react2.default.PropTypes.object,
  filters: _react2.default.PropTypes.object,
  onToggleInfo: _react2.default.PropTypes.func
};

exports.default = LegendItem;