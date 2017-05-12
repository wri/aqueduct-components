'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Timeline;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Timeline(props) {
  var _classnames;

  var items = props.items,
      selected = props.selected;

  var classList = (0, _classnames3.default)('c-timeline', (_classnames = {}, _defineProperty(_classnames, props.className, props.className), _defineProperty(_classnames, '-disabled', props.disabled), _classnames));

  return _react2.default.createElement(
    'div',
    { className: classList },
    _react2.default.createElement(
      'ul',
      { className: 'timeline-list' },
      items.map(function (item, index) {
        var itemClassList = (0, _classnames3.default)('timeline-list-item', {
          '-selected': selected ? selected.value === item.value : false
        });
        return _react2.default.createElement(
          'li',
          {
            key: index,
            className: itemClassList,
            onClick: function onClick() {
              return !props.disabled && props.onChange && props.onChange(item);
            }
          },
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

Timeline.propTypes = {
  items: _react2.default.PropTypes.array.isRequired,
  selected: _react2.default.PropTypes.any.isRequired,
  disabled: _react2.default.PropTypes.bool,
  onChange: _react2.default.PropTypes.func,
  className: _react2.default.PropTypes.string
};