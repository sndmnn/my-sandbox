import styled from 'styled-components';
import { DefaultButton } from './DefaultButton';

export const TertiaryButton = styled(DefaultButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  border-width: 1px;
  border-style: dashed;
  border-color: var(--color-gray-400);
  border-radius: 8px;

  white-space: nowrap;

  &,
  svg,
  span {
    color: var(--color-gray-400);
  }

  &,
  span {
    font: var(--font-size-s1) var(--font-sans);
    line-height: 1;
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.5);
  }
`;
