'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _findIndex = require('lodash/findIndex');

var _findIndex2 = _interopRequireDefault(_findIndex);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timeline = function (_React$Component) {
  _inherits(Timeline, _React$Component);

  function Timeline(props) {
    _classCallCheck(this, Timeline);

    var _this = _possibleConstructorReturn(this, (Timeline.__proto__ || Object.getPrototypeOf(Timeline)).call(this, props));

    _this.state = {};

    // BINDINGS
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  /**
   * UI EVENTS
   * - onChange
   * - onDrag
  */


  _createClass(Timeline, [{
    key: 'onClick',
    value: function onClick(e) {
      // Send object
      var index = (0, _findIndex2.default)(this.props.items, { value: e.currentTarget.dataset.value });
      this.props.onChange(this.props.items[index]);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          items = _props.items,
          selected = _props.selected;

      return _react2.default.createElement(
        'div',
        { className: 'c-timeline' },
        _react2.default.createElement(
          'ul',
          { className: 'timeline-list' },
          items.map(function (item, index) {
            var selectedClass = selected.value === item.value ? '-selected' : '';
            return _react2.default.createElement(
              'li',
              { className: 'timeline-list-item ' + selectedClass + ' ' + _this2.props.className, key: index, 'data-value': item.value, onClick: _this2.onClick },
              _react2.default.createElement(
                'div',
                { className: 'timeline-label' },
                item.label
              )
            );
          })
        )
      );
    }
  }]);

  return Timeline;
}(_react2.default.Component);

exports.default = Timeline;


Timeline.propTypes = {
  items: _react2.default.PropTypes.array.isRequired,
  selected: _react2.default.PropTypes.any.isRequired,
  onChange: _react2.default.PropTypes.func,
  className: _react2.default.PropTypes.string
};