import styled from 'styled-components';
import ContentWrapper from '../ContentWrapper';

export const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;

  position: sticky;
  top: 0;

  height: 64px;
  width: 100%;

  background-color: var(--color-gray);
`;

export const NavBarContent = styled(ContentWrapper)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  .color-store-logo {
    font-family: var(--font-sans);
    font-size: 1.25rem;
  }
`;

export const Cart = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  .shopping-cart-icon {
    min-width: 24px;
    min-height: 24px;

    margin-right: 8px;
  }

  .item-count {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: var(--font-sans);
    font-size: 1rem;
    width: 24px;

    background-color: var(--color-gray-darker);
    border-radius: 50%;
  }
`;
