import styled from 'styled-components';

export const ButtonContainer = styled.button`
  outline: none;
  border: none;

  font-family: var(--font-sans);
  font-weight: 500;
  color: var(--color-white);

  height: 40px;
  width: 100%;
  border-radius: 8px;
  background-color: var(--color-gray-darker);

  &:hover {
    cursor: pointer;

    transition: background-color 0.2s ease-in-out;
    background-color: var(--color-gray-darkest);
  }

  &:active {
    transform: translateY(2px);
  }
`;
