import React from 'react';
import ExampleModal from '../../components/ExampleModal';
import { OpenModalButton, PageContent } from './ModalPage.styles';

const ModalPage: React.FC = () => {
  const modalReference = React.useRef();

  return (
    <main>
      <PageContent>
        <h1 className="page-title">Modal Example</h1>
        <p className="page-description">
          Click the button bellow to see an example modal
        </p>

        <OpenModalButton
          onClick={() => {
            const modal = modalReference.current as any;
            modal.openModal();
          }}
        >
          Open Modal
        </OpenModalButton>

        <ExampleModal ref={modalReference} />
      </PageContent>
    </main>
  );
};

export default ModalPage;
