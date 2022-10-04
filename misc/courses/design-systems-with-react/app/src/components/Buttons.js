import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
  large: () => css`
    font-size: 1.25rem;
    padding: 16px 24px;
  `,
  small: () => css`
    font-size: 0.8rem;
    padding: 8px 12px;
  `,
  success: () => css`
    border: none;
    background-color: var(--color-status-success-300);
    color: var(--color-text-inverted);

    &:hover {
      background-color: var(--color-status-success-200);
    }

    &:focus {
      outline: 2px dashed var(--color-text-inverted);
      outline-offset: -2px;
    }
  `,
  warning: () => css`
    border: none;
    background-color: var(--color-status-warning-100);

    &:hover {
      background-color: var(--color-status-warning-300);
    }

    &:focus {
      outline: 2px dashed var(--color-text);
      outline-offset: -2px;
    }
  `,
  error: () => css`
    border: none;
    background-color: var(--color-status-error-300);
    color: var(--color-text-inverted);

    &:hover {
      background-color: var(--color-status-error-200);
    }

    &:focus {
      outline: 2px dashed var(--color-text-inverted);
      outline-offset: -2px;
    }
  `,
};

const BaseButton = styled.button`
  font-family: var(--font-sans);
  font-size: 1rem;
  color: var(--color-text);

  padding: 12px 16px;
  background-color: var(--color-primary-300);

  border: none;
  border-radius: 8px;

  min-width: fit-content;
  box-shadow: var(--shadow-resting-button);

  cursor: pointer;

  transition: 0.2s;

  ${({ disabled }) =>
    !disabled &&
    css`
      &:active {
        transform: scale(0.95);
        box-shadow: var(--shadow-active-button);
      }
    `}

  &:disabled {
    cursor: not-allowed;
  }
`;

export const PrimaryButton = styled(BaseButton)`
  &:hover {
    background-color: var(--color-primary-500);
  }

  &:focus {
    outline: 1px dashed var(--color-text);
  }

  &:disabled {
    background-color: var(--color-neutral-400);
    color: var(--color-text-inverted);
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(BaseButton)`
  background-color: unset;
  border: 1px solid var(--color-text);

  &:hover {
    background-color: var(--color-primary-400);
    color: var(--color-text-inverted);
    border-color: unset;
  }

  &:focus {
    outline: 1px dashed var(--color-text);
  }

  &:disabled {
    background-color: unset;
    border-color: var(--color-netral-500);
    color: var(--color-neutral-500);
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(BaseButton)`
  background-color: unset;
  box-shadow: none;

  &:hover {
    border: 1px solid var(--color-text);
    box-shadow: var(--shadow-resting-button);
  }

  &:focus {
    outline: 1px dashed var(--color-text);
  }

  &:disabled {
    border: none;
    box-shadow: none;
    color: var(--color-neutral-500);
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
