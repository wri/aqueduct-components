'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SegmentedUi = function (_React$Component) {
  _inherits(SegmentedUi, _React$Component);

  function SegmentedUi(props) {
    _classCallCheck(this, SegmentedUi);

    var _this = _possibleConstructorReturn(this, (SegmentedUi.__proto__ || Object.getPrototypeOf(SegmentedUi)).call(this, props));

    _this.state = {
      selected: props.selected || null
    };
    return _this;
  }

  _createClass(SegmentedUi, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.selected && nextProps.selected !== this.state.selected) {
        this.setState({
          selected: nextProps.selected
        });
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(item) {
      this.setState({
        selected: item.value
      });
      this.props.onChange && this.props.onChange(item);
    }
  }, {
    key: 'getItems',
    value: function getItems() {
      var _this2 = this;

      return this.props.items.map(function (item, index) {
        var cNames = (0, _classnames2.default)('segmented-ui-item', {
          '-active': item.value === _this2.state.selected
        });
        return _react2.default.createElement(
          'li',
          { key: index, className: cNames },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'segmented-ui-btn', onClick: function onClick() {
                _this2.onChange(item);
              } },
            item.label
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var cNames = (0, _classnames2.default)('c-segmented-ui', _defineProperty({}, this.props.className, this.props.className));
      return _react2.default.createElement(
        'ul',
        { className: cNames },
        this.getItems()
      );
    }
  }]);

  return SegmentedUi;
}(_react2.default.Component);

exports.default = SegmentedUi;


SegmentedUi.propTypes = {
  items: _react2.default.PropTypes.array,
  selected: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func
};