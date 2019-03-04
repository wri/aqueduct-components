// CONSTANTS
const MODAL_TOGGLE = 'MODAL_TOGGLE';
const MODAL_SET_OPTIONS = 'MODAL_SET_OPTIONS';
const MODAL_LOADING = 'MODAL_LOADING';

// ACTIONS
export function closeModal() {
  return dispatch => dispatch({ type: MODAL_TOGGLE });
}

export function toggleModal(opened, opts = {}) {
  return (dispatch) => {
    if (opened && opts) {
      dispatch({ type: MODAL_SET_OPTIONS, payload: opts });
    }
    dispatch({ type: MODAL_TOGGLE, payload: opened });
  };
}

export function modalLoading(loading) {
  return dispatch => dispatch({ type: MODAL_LOADING, payload: loading });
}

export function setModalOptions(opts) {
  return dispatch => dispatch({ type: MODAL_SET_OPTIONS, payload: opts });
}

// REDUCER
const initialState = {
  opened: false,
  options: {
    children: null,
    childrenProps: null,
    size: ''
  },
  loading: false
};

export function modalReducer(state = initialState, action) {
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