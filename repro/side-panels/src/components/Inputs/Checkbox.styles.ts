import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  font-family: var(--font-sans);

  &,
  .checkbox-input,
  .checkbox-label {
    cursor: pointer;
  }

  .checkbox-label {
    display: flex;
    align-items: center;

    color: var(--color-black-100);
  }

  .checkbox-input {
    margin-right: 8px;
  }
`;
