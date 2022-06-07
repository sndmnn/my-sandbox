import React from 'react';
import { MdRemoveCircle } from 'react-icons/md';
import Product from '../../models/Product';
import useCart from '../../services/swr/useCart';
import {
  CartItemContainer,
  ProductInfo,
  RemoveFromCartButton,
} from './CartItem.styles';

interface ComponentProps {
  product: Product;
}

const CartItem: React.FC<ComponentProps> = ({ product }) => {
  const { removeFromCart } = useCart();

  return (
    <CartItemContainer>
      <RemoveFromCartButton onClick={() => removeFromCart(product.id)}>
        <MdRemoveCircle />
      </RemoveFromCartButton>

      <ProductInfo>
        <p className="name">{product.name}</p>
        <p className="price">{product.price}</p>
      </ProductInfo>
    </CartItemContainer>
  );
};

export default CartItem;
