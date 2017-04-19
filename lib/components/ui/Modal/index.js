'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Spinner = require('../Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.el.addEventListener('transitionend', function () {
        if (!_this2.props.modal.opened) {
          _this2.props.setModalOptions({ children: null });
        }
      });
    }

    // Close modal when esc key is pressed

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var modal = _ref.modal;

      function escKeyPressListener(evt) {
        document.removeEventListener('keydown', escKeyPressListener);
        return evt.keyCode === 27 && this.props.toggleModal(false);
      }
      // if opened property has changed
      if (this.props.modal.opened !== modal.opened) {
        document[modal.opened ? 'addEventListener' : 'removeEventListener']('keydown', escKeyPressListener);
      }
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      return this.props.modal.options.children ? _react2.default.createElement(this.props.modal.options.children, this.props.modal.options.childrenProps) : null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'section',
        { ref: function ref(node) {
            _this3.el = node;
          }, className: 'c-modal ' + (this.props.modal.opened ? '' : '-hidden') + ' ' + this.props.modal.options.size },
        _react2.default.createElement(
          'div',
          { className: 'modal-container' },
          _react2.default.createElement(
            'button',
            { className: 'modal-close', onClick: function onClick() {
                return _this3.props.toggleModal(false);
              } },
            _react2.default.createElement(_Icon2.default, { name: 'icon-cross', className: '-big' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'modal-content' },
            this.props.modal.loading ? _react2.default.createElement(_Spinner2.default, { isLoading: true }) : this.getContent()
          )
        ),
        _react2.default.createElement('area', { className: 'modal-backdrop', onClick: function onClick() {
            return _this3.props.toggleModal(false);
          } })
      );
    }
  }]);

  return Modal;
}(_react2.default.Component);

exports.default = Modal;


Modal.propTypes = {
  // STORE
  modal: _react2.default.PropTypes.object,
  // ACTIONS
  toggleModal: _react2.default.PropTypes.func,
  setModalOptions: _react2.default.PropTypes.func
};