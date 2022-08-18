import React, { Fragment } from 'react';
import useCart from '../../hooks/useCart';
import PrimaryButton from '../PrimaryButton';
import { CartContainer } from './Cart.styles';
import CartItem from './CartItem';

interface ComponentProps {
  shouldShow?: boolean;
}

const Cart: React.FC<ComponentProps> = ({ shouldShow = false }) => {
  const { clearCart, cart } = useCart();

  return (
    <CartContainer shouldShow={shouldShow}>
      {cart &&
        cart.map((item) => (
          <Fragment key={item.product.id}>
            <CartItem cartItem={item} />
          </Fragment>
        ))}

      <PrimaryButton onClick={clearCart}>Finalizar Compra</PrimaryButton>
    </CartContainer>
  );
};

export default Cart;
