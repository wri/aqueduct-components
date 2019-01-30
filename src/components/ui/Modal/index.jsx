import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Spinner from '../Spinner';

export default class Modal extends React.Component {

  componentDidMount() {
    this.el.addEventListener('transitionend', () => {
      if (!this.props.modal.opened) {
        this.props.setModalOptions({ children: null });
      }
    });
  }

  // Close modal when esc key is pressed
  componentWillReceiveProps({ modal }) {
    function escKeyPressListener(evt) {
      document.removeEventListener('keydown', escKeyPressListener);
      return evt.keyCode === 27 && this.props.toggleModal(false);
    }
    // if opened property has changed
    if (this.props.modal.opened !== modal.opened) {
      document[modal.opened ? 'addEventListener' : 'removeEventListener']('keydown', escKeyPressListener.bind(this));
    }
  }

  getContent() {
    return this.props.modal.options.children ?
      <this.props.modal.options.children {...this.props.modal.options.childrenProps} /> : null;
  }

  render() {
    return (
      <section ref={(node) => { this.el = node; }} className={`c-modal ${this.props.modal.opened ? '' : '-hidden'} ${this.props.modal.options.size}`}>
        <div className="modal-container">
          <button className="modal-close" onClick={() => this.props.toggleModal(false)}>
            <Icon name="icon-cross" className="-big" />
          </button>
          <div className="modal-content">
            {this.props.modal.loading ? <Spinner isLoading /> : this.getContent()}
          </div>
        </div>
        <area className="modal-backdrop" onClick={() => this.props.toggleModal(false)} />
      </section>
    );
  }
}

Modal.propTypes = {
  // STORE
  modal: PropTypes.object,
  // ACTIONS
  toggleModal: PropTypes.func,
  setModalOptions: PropTypes.func
};
