import React from 'react';
import CartItem from '../../models/CartItem';
import { CartItemContainer, ProductInfo } from './CartItem.styles';

interface ComponentProps {
  cartItem: CartItem;
}

const CartItem: React.FC<ComponentProps> = ({ cartItem }) => {
  return (
    <CartItemContainer>
      <p className="quantity">{cartItem.quantity}x</p>

      <ProductInfo>
        <p className="name">{cartItem.product.name}</p>
        <p className="price">{cartItem.product.price}</p>
      </ProductInfo>
    </CartItemContainer>
  );
};

export default CartItem;
