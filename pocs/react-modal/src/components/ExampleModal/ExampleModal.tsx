import React from 'react';
import Modal from '../Modal';
import { ModalContent } from './ExampleModal.styles';

const ExampleModal = React.forwardRef((_, ref) => {
  return (
    <Modal ref={ref}>
      <ModalContent>
        <h1 className="modal-title">Example Modal</h1>
        <p className="modal-description">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Hi, I'm an example modal. Click the close button or press the ESC key
          to close me!
        </p>
      </ModalContent>
    </Modal>
  );
});

export default ExampleModal;
