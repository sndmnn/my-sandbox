import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 800px;
  height: 580px;

  background: var(--color-neutral-100);
  box-shadow: var(--shadow-modal);
  border-radius: 8px;

  .hero {
    max-width: 60%;
  }
`;
