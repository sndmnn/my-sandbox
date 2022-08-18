import React from 'react';
import Product from '../../models/Product';
import useCart from '../../hooks/useCart';
import {
  ProductCardContainer,
  ProductInfo,
  ProductPicture,
} from './ProductCard.styles';
import PrimaryButton from '../../components/PrimaryButton';

interface ComponentProps {
  product: Product;
}

const ProductCard: React.FC<ComponentProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <ProductCardContainer>
      <ProductPicture src={product.productPictureUrl} />

      <ProductInfo>
        <p className="name">{product.name}</p>
        <p className="price">R${product.price}</p>
      </ProductInfo>

      <PrimaryButton onClick={() => addToCart(product)}>
        Add to Cart
      </PrimaryButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
