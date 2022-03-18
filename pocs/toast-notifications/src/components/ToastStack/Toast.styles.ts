import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import StrippedButton from '../StrippedButton';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: number;
}

const toastTypeVariations = {
  info: css`
    background: var(--color-blue-pale);
    color: var(--color-blue-contrast);
  `,
  success: css`
    background: var(--color-green-pale);
    color: var(--color-green-contrast);
  `,
  error: css`
    background: var(--color-red-pale);
    color: var(--color-red-contrast);
  `,
};

export const ToastContainer = styled(animated.div)`
  position: relative;
`;

export const ToastContent = styled.div<ContainerProps>`
  display: flex;

  ${props => toastTypeVariations[props.type || 'info']}

  width: 100%;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  .toast-icon {
    margin: 4px 12px 0 0;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;

      .toast-icon {
        margin-top: 0;
      }
    `}
`;

export const ToastMessage = styled.article`
  flex: 1;
  padding-right: 8px;

  .toast-title,
  .toast-description {
    font-family: var(--font-sans);
  }

  .toast-title {
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1;
  }

  .toast-description {
    margin-top: 8px;
    font-size: 1rem;
    line-height: 1.25;
  }
`;

export const CloseToastButton = styled(StrippedButton)`
  opacity: 0.6;
  color: inherit;
  align-self: flex-start;
`;
