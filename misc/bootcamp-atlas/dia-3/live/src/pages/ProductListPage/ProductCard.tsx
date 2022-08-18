import React from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import useCart from '../../hooks/useCart';
import Product from '../../models/Product';
import {
  ProductCardContainer,
  ProductInfo,
  ProductPicture,
} from './ProductCart.styles';

interface ComponentProps {
  productInfo: Product;
}

const ProductCard: React.FC<ComponentProps> = ({ productInfo }) => {
  const { addToCart } = useCart();

  return (
    <ProductCardContainer>
      <ProductPicture src={productInfo.productPictureUrl} />

      <ProductInfo>
        <p className="name">{productInfo.name}</p>
        <p className="price">{productInfo.price}</p>
      </ProductInfo>

      <PrimaryButton onClick={() => addToCart(productInfo)}>
        Adicionar ao Carrinho
      </PrimaryButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
