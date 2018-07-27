import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import Modal from 'react-modal';

// components
import Button from 'components/ui/button';
import Icon from 'components/ui/icon';

// styles
import styles from './styles.scss';

export class CustomModal extends PureComponent {
  static propTypes = {
    // http://reactcommunity.org/react-modal/accessibility/#app-element
    appElement: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    customClass: PropTypes.string
  };

  static defaultProps = {
    className: null,
    customClass: null
  };

  componentWillMount() {
    Modal.setAppElement(this.props.appElement);
  }

  render() {
    const {
      className,
      customClass,
      children,
      appElement,
      ...modalProps
    } = this.props;
    const componentClass = classnames('c-modal', { [className]: !!className });
    const externalClass = classnames({ [customClass]: !!customClass });

    return (
      <Modal
        {...modalProps}
        styleName={componentClass}
        className={externalClass}
        overlayClassName="aq__ReactModal__Overlay"
        bodyOpenClassName="aq__ReactModal__Body--open"
        htmlOpenClassName="aq__ReactModal__Html--open"
      >
        <div styleName="modal-container">
          <header styleName="modal-header">
            <Button onClick={modalProps.onRequestClose || null}>
              <Icon
                name="cross"
                className="-big"
                customClass="aq__modal-close-icon"
              />
            </Button>
          </header>
          <div styleName="modal-content">
            <div styleName="overflow-container">
              {children}
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default CSSModules(CustomModal, styles, { allowMultiple: true });
