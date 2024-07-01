import styled, { css } from 'styled-components';

interface InputProps {
  error: boolean;
  disabled?: boolean;
}

export const InputContainer = styled.div<InputProps>`
  display: flex;
  flex-direction: column;

  font: var(--font-size-p) var(--font-sans);

  .label,
  .error {
    color: ${({ error }) =>
      error ? 'var(--color-red-300)' : 'var(--color-gray-400)'};
    transition: color 0.2s ease-in;
  }

  .label {
    display: flex;
    align-items: center;

    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .input {
    border: 1px solid var(--color-gray-400);
    background-color: var(--color-white-100);
    border-radius: 8px;
    width: 100%;

    transition-property: border-color, box-shadow;
    transition-duration: 0.2s;
    transition-timing-function: ease-in;
  }

  ${({ error }) => {
    return (
      error &&
      css`
        .input {
          border-color: var(--color-red-300);
        }
      `
    );
  }}

  .input:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    border-color: var(--color-black-200);
  }

  &:focus-within .label {
    color: var(--color-black-200);
  }

  .error {
    margin-top: 0.5rem;
    font-size: var(--font-size-s2);
  }

  :disabled {
    opacity: 0.65;

    .input {
      cursor: not-allowed;
    }
  }
`;
