import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .quantity {
    margin-right: 24px;
  }

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
    text-align: right;
  }
`;
