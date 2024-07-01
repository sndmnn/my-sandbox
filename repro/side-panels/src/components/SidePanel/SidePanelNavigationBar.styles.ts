import styled from 'styled-components';
import Color from '../../styles/colors';

const marginBottomColor = new Color('gray-200').withAlpha(0.25).rgba();

export const Container = styled.nav`
  position: sticky;
  top: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  z-index: 1;

  width: 100%;
  height: 56px;
  padding: 0 24px;
  border-bottom: 1px solid ${marginBottomColor};
  background-color: var(--color-white-100);

  color: var(--color-gray-300);

  .inactive {
    opacity: 0 !important;
    cursor: default !important;
  }

  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    color: var(--color-gray-300);
    text-decoration: none;
  }

  svg {
    height: 24px;
    width: 24px;

    color: var(--color-gray-300);
  }
`;
