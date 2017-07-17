'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _text = require('../../../utils/text');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapHeader = function (_React$Component) {
  _inherits(MapHeader, _React$Component);

  function MapHeader(props) {
    _classCallCheck(this, MapHeader);

    var _this = _possibleConstructorReturn(this, (MapHeader.__proto__ || Object.getPrototypeOf(MapHeader)).call(this, props));

    _this.state = {
      text: null
    };
    return _this;
  }

  _createClass(MapHeader, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.updateText(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.updateText(nextProps);
    }
  }, {
    key: 'updateText',
    value: function updateText(props) {
      var params = this.parseFilters(props.filters);

      this.setState({
        text: (0, _text.substitution)(props.template, params)
      });
    }
  }, {
    key: 'parseFilters',
    value: function parseFilters(filters) {
      var _this2 = this;

      var parsedFilters = [];

      Object.keys(filters).forEach(function (key) {
        if (Object.hasOwnProperty.call(_this2.props.dictionary, key)) {
          parsedFilters.push({
            key: key,
            value: _this2.props.dictionary[key](filters[key])
          });
        }
      });

      return parsedFilters;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'c-map-header' },
        this.state.text && _react2.default.createElement(
          'span',
          { className: 'title' },
          this.state.text
        )
      );
    }
  }]);

  return MapHeader;
}(_react2.default.Component);

exports.default = MapHeader;


MapHeader.propTypes = {
  dictionary: _propTypes2.default.object,
  filters: _propTypes2.default.object
};