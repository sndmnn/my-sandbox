import styled from 'styled-components';

export const ProductCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 16px;

  width: 256px;
  border-radius: 8px;
  box-shadow: var(--elevation-shadow);
`;

export const ProductPicture = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const ProductInfo = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 24px;

  font-family: var(--font-sans);

  .name,
  .price {
    font-size: 1.25rem;
  }

  .name {
    margin-bottom: 8px;
  }

  .price {
    font-weight: 500;
  }
`;
