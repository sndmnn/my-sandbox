import React, { Fragment } from 'react';
import useCart from '../../services/swr/useCart';
import { CartContainer } from './Cart.styles';
import CartItem from './CartItem';

interface ComponentProps {
  shouldShow?: boolean;
}

const Cart: React.FC<ComponentProps> = ({ shouldShow = false }) => {
  const { cart } = useCart();

  return (
    <CartContainer shouldShow={shouldShow}>
      {cart &&
        cart.map(product => (
          <Fragment key={product.id}>
            <CartItem product={product} />
          </Fragment>
        ))}
    </CartContainer>
  );
};

Cart.defaultProps = {
  shouldShow: false,
};

export default Cart;
