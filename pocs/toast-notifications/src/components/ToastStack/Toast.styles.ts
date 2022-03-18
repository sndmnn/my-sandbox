import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import StrippedButton from '../StrippedButton';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: number;
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
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
