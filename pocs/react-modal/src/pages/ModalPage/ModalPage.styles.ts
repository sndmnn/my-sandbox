import styled from 'styled-components';
import ContentWrapper from '../../components/ContentWrapper';
import StrippedButton from '../../components/StrippedButton';

export const PageContent = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  .page-title,
  .page-description {
    font-family: var(--font-sans);
  }

  .page-title {
    font-size: 1.563rem;
    margin-bottom: 16px;
  }

  .page-description {
    font-size: 1rem;
    margin-bottom: 24px;
  }
`;

export const OpenModalButton = styled(StrippedButton)`
  padding: 8px;
  border-radius: 8px;
  background-color: var(--color-grey);

  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-white);
`;
