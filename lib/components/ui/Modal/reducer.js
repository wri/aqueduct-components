'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeModal = closeModal;
exports.toggleModal = toggleModal;
exports.modalLoading = modalLoading;
exports.setModalOptions = setModalOptions;
exports.modalReducer = modalReducer;
// CONSTANTS
var MODAL_TOGGLE = 'MODAL_TOGGLE';
var MODAL_SET_OPTIONS = 'MODAL_SET_OPTIONS';
var MODAL_LOADING = 'MODAL_LOADING';

// ACTIONS
function closeModal() {
  return function (dispatch) {
    return dispatch({ type: MODAL_TOGGLE });
  };
}

function toggleModal(opened) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return function (dispatch) {
    if (opened && opts) {
      dispatch({ type: MODAL_SET_OPTIONS, payload: opts });
    }
    dispatch({ type: MODAL_TOGGLE, payload: opened });
  };
}

function modalLoading(loading) {
  return function (dispatch) {
    return dispatch({ type: MODAL_LOADING, payload: loading });
  };
}

function setModalOptions(opts) {
  return function (dispatch) {
    return dispatch({ type: MODAL_SET_OPTIONS, payload: opts });
  };
}

// REDUCER
var initialState = {
  opened: false,
  options: {
    children: null,
    childrenProps: null,
    size: ''
  },
  loading: false
};

function modalReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case MODAL_TOGGLE:
      return Object.assign({}, state, { opened: action.payload });
    case MODAL_SET_OPTIONS:
      return Object.assign({}, state, { options: action.payload });
    case MODAL_LOADING:
      return Object.assign({}, state, { loading: action.payload });
    default:
      return state;
  }
}