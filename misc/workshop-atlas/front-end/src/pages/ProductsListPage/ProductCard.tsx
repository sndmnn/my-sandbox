import React from 'react';
import Product from '../../models/Product';
import useCart from '../../services/swr/useCart';
import {
  AddToCartButton,
  ProductCardContainer,
  ProductInfo,
} from './ProductCard.styles';

interface ComponentProps {
  product: Product;
}

const ProductCard: React.FC<ComponentProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <ProductCardContainer>
      <ProductInfo>
        <p className="name">{product.name}</p>
        <p className="price">{product.price}</p>
      </ProductInfo>

      <AddToCartButton onClick={() => addToCart(product.id)}>
        Add to Cart
      </AddToCartButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
