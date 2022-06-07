import styled from 'styled-components';
import PrimaryButton from '../../components/PrimaryButton';

export const ProductCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 16px;

  width: 256px;
  border-radius: 8px;
  box-shadow: var(--elevation-shadow);
`;

export const ProductInfo = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 24px;

  font-family: var(--font-sans);

  .name {
    font-weight: 500;
    margin-bottom: 8px;
  }

  .price {
    font-size: 1.25rem;
  }
`;

export const AddToCartButton = styled(PrimaryButton)`
  width: ;
`;
