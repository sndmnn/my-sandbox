import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  height: 32px;

  background-color: var(--color-white-100);
  border: 1px solid var(--color-gray-400);
  border-radius: 8px;

  > svg {
    width: 16px;
    height: 16px;
    color: var(--color-gray-400);
    margin: 0 0.5rem;
  }

  &,
  > svg {
    transition: all 0.2s ease-in;
  }

  &:focus-within {
    border-color: var(--color-black-200);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  }

  &:focus-within > svg {
    color: var(--color-black-200);
  }
`;

export const SearchInput = styled.input`
  font-family: var(--font-sans);

  background-color: unset;
  border: none;

  width: 100%;
  height: 32px;
  padding: 0 0.5rem;
  border-right: none;

  &:focus {
    outline: none;
  }
`;
