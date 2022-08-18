import styled from 'styled-components';

export const CartContainer = styled.div<{ shouldShow: boolean }>`
  position: absolute;

  top: calc(100% + 24px);
  right: 0;

  min-width: 256px;

  padding: 24px;
  border-radius: 8px;
  background-color: var(--color-white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);

  transform: scale(${({ shouldShow }) => (shouldShow ? 1 : 0)});
  transition: transform 0.1s ease-in;
`;
