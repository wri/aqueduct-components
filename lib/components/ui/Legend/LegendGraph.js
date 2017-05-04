'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Responsive = require('../Responsive');

var _Responsive2 = _interopRequireDefault(_Responsive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LegendGraph = function (_React$Component) {
  _inherits(LegendGraph, _React$Component);

  function LegendGraph() {
    _classCallCheck(this, LegendGraph);

    return _possibleConstructorReturn(this, (LegendGraph.__proto__ || Object.getPrototypeOf(LegendGraph)).apply(this, arguments));
  }

  _createClass(LegendGraph, [{
    key: 'getLegendGraph',
    value: function getLegendGraph() {
      var config = this.props.config;
      switch (config.type) {
        case 'mask':
          {
            return null;
          }

        case 'basic':
          {
            return _react2.default.createElement(
              'div',
              { className: 'graph -' + config.type },
              _react2.default.createElement(
                'div',
                { className: 'graph-list' },
                config.items.map(function (item, i) {
                  return _react2.default.createElement(
                    'div',
                    { className: 'graph-list-item', key: i },
                    _react2.default.createElement('span', { className: 'color', style: { background: item.color } }),
                    _react2.default.createElement(
                      'span',
                      { className: 'label' },
                      item.name
                    )
                  );
                })
              )
            );
          }

        case 'group':
          {
            return _react2.default.createElement(
              'div',
              { className: 'graph -' + config.type },
              config.items.map(function (item, i) {
                return _react2.default.createElement(
                  'div',
                  { key: i, className: 'graph-group' },
                  _react2.default.createElement(
                    'div',
                    { className: 'graph-group-name' },
                    item.name
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'graph-list' },
                    item.items.map(function (it, j) {
                      return _react2.default.createElement(
                        'div',
                        { className: 'graph-list-item', key: j },
                        _react2.default.createElement('span', { className: 'color', style: { background: it.color } }),
                        _react2.default.createElement(
                          'span',
                          { className: 'label' },
                          it.name
                        )
                      );
                    })
                  )
                );
              })
            );
          }

        case 'cluster':
          {
            return _react2.default.createElement(
              'div',
              { className: 'graph -' + config.type },
              _react2.default.createElement(
                'div',
                { className: 'graph-units' },
                'Units: ',
                config.units
              ),
              _react2.default.createElement(
                'div',
                { className: 'graph-description' },
                config.description
              ),
              _react2.default.createElement(
                'div',
                { className: 'graph-list' },
                config.items.map(function (item, i) {
                  return _react2.default.createElement(
                    'div',
                    { className: 'graph-list-item', key: i },
                    _react2.default.createElement('span', { className: 'color', style: { background: item.color } }),
                    _react2.default.createElement(
                      'span',
                      { className: 'label' },
                      item.name
                    )
                  );
                })
              )
            );
          }

        case 'choropleth':
          {
            return _react2.default.createElement(
              'div',
              { className: 'graph -' + config.type },
              config.units && _react2.default.createElement(
                'div',
                { className: 'graph-units' },
                'Units: ',
                config.units
              ),
              _react2.default.createElement(
                _Responsive2.default,
                { device: 'desktop' },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'div',
                    { className: 'graph-list' },
                    config.items.map(function (item, i) {
                      return _react2.default.createElement(
                        'div',
                        { className: 'graph-list-item', style: { width: 100 / config.items.length + '%' }, key: i },
                        _react2.default.createElement('span', { className: 'color', style: { background: item.color } })
                      );
                    })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'graph-list' },
                    config.items.map(function (item, i) {
                      return _react2.default.createElement(
                        'div',
                        { className: 'graph-list-item', style: { width: 100 / config.items.length + '%' }, key: i },
                        _react2.default.createElement(
                          'span',
                          { className: 'label' },
                          item.name
                        )
                      );
                    })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'graph-list' },
                    config.items.map(function (item, i) {
                      return _react2.default.createElement(
                        'div',
                        { className: 'graph-list-item', style: { width: 100 / config.items.length + '%' }, key: i },
                        _react2.default.createElement(
                          'span',
                          { className: 'value' },
                          item.value
                        )
                      );
                    })
                  ),
                  config.disclaimer && _react2.default.createElement(
                    'div',
                    { className: 'graph -basic -disclaimer' },
                    _react2.default.createElement(
                      'div',
                      { className: 'graph-list' },
                      config.disclaimer.map(function (item, i) {
                        return _react2.default.createElement(
                          'div',
                          { className: 'graph-list-item', key: i },
                          _react2.default.createElement('span', { className: 'color', style: { background: item.color } }),
                          _react2.default.createElement(
                            'span',
                            { className: 'label' },
                            item.name
                          )
                        );
                      })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _Responsive2.default,
                { device: 'mobile' },
                _react2.default.createElement(
                  'div',
                  { className: 'graph-list' },
                  config.items.map(function (item, i) {
                    return _react2.default.createElement(
                      'div',
                      { className: 'graph-list-item', key: i },
                      _react2.default.createElement('span', { className: 'color', style: { background: item.color } }),
                      _react2.default.createElement(
                        'span',
                        { className: 'label' },
                        item.name
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'value' },
                        item.value
                      )
                    );
                  })
                )
              )
            );
          }

        default:
          {
            console.error('No type specified');
            return null;
          }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'c-legend-graph' },
        this.getLegendGraph()
      );
    }
  }]);

  return LegendGraph;
}(_react2.default.Component);

LegendGraph.propTypes = {
  // PROPS
  config: _react2.default.PropTypes.object
};

exports.default = LegendGraph;