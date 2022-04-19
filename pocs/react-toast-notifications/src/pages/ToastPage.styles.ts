import styled from 'styled-components';
import StrippedButton from '../components/StrippedButton';

export const PageContainer = styled.main`
  max-width: 1120px;
  margin: 0 24px;

  @media screen and (min-width: 1168px) {
    margin: 0 auto;
  }
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 48px;

  font-family: var(--font-sans);
  color: var(--color-black);

  .page-title {
    font-size: 1.953rem;
    font-weight: 700;
    text-align: center;

    margin-bottom: 32px;
  }
`;

export const ToastInformationForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-bottom: 24px;

  & > :not(:last-child) {
    margin-bottom: 16px;
  }

  .toast-type,
  .toast-title,
  .toast-description {
    font-size: 1rem;
    padding: 8px;
  }
`;

export const EmitToastButton = styled(StrippedButton)`
  font-size: 1.125rem;
  font-weight: 500;
  text-align: center;
  color: var(--color-white);

  padding: 8px 16px;
  background-color: var(--color-green);
  border-radius: 8px;
`;
