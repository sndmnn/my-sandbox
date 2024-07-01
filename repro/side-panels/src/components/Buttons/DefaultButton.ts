import styled from 'styled-components';

export const DefaultButton = styled.button`
  border: none;
  background-color: unset;

  height: 32px;
  padding: 0 1rem;

  transition: all 0.1s ease-in;

  display: flex;
  align-items: center;

  svg {
    height: 16px;
    width: 16px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95);
  }

  & > :not(:first-child) {
    margin-left: 0.5rem;
  }
`;
