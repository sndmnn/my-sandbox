import styled from 'styled-components';
import { DefaultButton } from './DefaultButton';

export const PrimaryButton = styled(DefaultButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-blue-500);
  border-radius: 8px;

  white-space: nowrap;

  &,
  svg,
  span {
    color: var(--color-white-100);
  }

  &,
  span {
    font: var(--font-size-s1) var(--font-sans);
    line-height: 1;
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.75);
  }
`;
