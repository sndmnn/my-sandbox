import styled from 'styled-components';

export const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .sort-button {
    background: unset;
    border: none;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
  }

  .sort-button svg {
    height: 1rem;
    width: 1rem;
  }

  .sort-button svg.order {
    color: var(--color-gray-300);
  }
`;
