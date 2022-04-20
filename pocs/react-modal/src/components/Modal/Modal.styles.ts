import styled from 'styled-components';
import ContentWrapper from '../ContentWrapper';
import StrippedButton from '../StrippedButton';

export const ModalContainer = styled.dialog`
  margin: auto;
  border: none;
  border-radius: 8px;

  ::backdrop {
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(1px);
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;

  padding: 24px;
`;

export const CloseModalButton = styled(StrippedButton)`
  align-self: flex-end;

  .close-icon {
    min-width: 24px;
    min-height: 24px;
  }
`;
