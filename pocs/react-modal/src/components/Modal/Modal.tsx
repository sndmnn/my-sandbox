import React, { useCallback, useImperativeHandle, useRef } from 'react';
import ReactDOM from 'react-dom';
import dialogPolyfill from 'dialog-polyfill';
import { MdClose } from 'react-icons/md';
import { CloseModalButton, ModalContainer, ModalContent } from './Modal.styles';

interface ModalProps {
  children?: React.ReactNode;
}

const Modal = React.forwardRef<unknown, ModalProps>(({ children }, ref) => {
  const modalRef = useRef(null);

  const openModal = useCallback(() => {
    const modal = modalRef.current as any;
    dialogPolyfill.registerDialog(modal);
    modal.showModal();
  }, []);

  const closeModal = useCallback(() => {
    const modal = modalRef.current as any;
    modal.close();
  }, []);

  useImperativeHandle(ref, () => ({
    openModal,
    closeModal,
  }));

  return ReactDOM.createPortal(
    <ModalContainer ref={modalRef}>
      <ModalContent>
        <CloseModalButton onClick={closeModal}>
          <MdClose className="close-icon" />
        </CloseModalButton>

        <div>{children}</div>
      </ModalContent>
    </ModalContainer>,
    document.body,
  );
});

Modal.defaultProps = {
  children: null,
};

export default Modal;
