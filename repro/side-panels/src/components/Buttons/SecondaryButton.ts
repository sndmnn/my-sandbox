import styled from 'styled-components';
import { DefaultButton } from './DefaultButton';

export const SecondaryButton = styled(DefaultButton)<{ variant?: 'danger' }>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-white-100);
  border-width: 1px;
  border-style: solid;
  border-color: ${({ variant }) => {
    switch (variant) {
      case 'danger':
        return 'var(--color-red-300)';
      default:
        return 'var(--color-gray-400)';
    }
  }};
  border-radius: 8px;

  &,
  svg,
  span {
    color: ${({ variant }) => {
      switch (variant) {
        case 'danger':
          return 'var(--color-red-300)';
        default:
          return 'var(--color-gray-400)';
      }
    }};
  }

  &,
  span {
    font: var(--font-size-s1) var(--font-sans);
  }

  white-space: nowrap;

  &:hover,
  &:focus {
    ${({ variant }) => {
      switch (variant) {
        case 'danger':
          return '';
        default:
          return `
            color: var(--color-black-200);
            border-color: var(--color-black-200);
          `;
      }
    }}
    box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.5);
  }
`;
