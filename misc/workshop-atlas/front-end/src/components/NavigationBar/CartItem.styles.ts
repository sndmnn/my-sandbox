import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  :not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const ProductInfo = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .name {
    font-weight: 500;
    margin-bottom: 8px;
  }
`;

export const RemoveFromCartButton = styled.button`
  outline: none;
  border: none;
  background-color: unset;
`;
