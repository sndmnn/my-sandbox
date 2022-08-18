import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import { CartContainer } from './Cart.styles';
import PrimaryButton from '../PrimaryButton';
import useCart from '../../hooks/useCart';

interface ComponentProps {
  shouldShow?: boolean;
}

const Cart: React.FC<ComponentProps> = ({ shouldShow = false }) => {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <CartContainer shouldShow={shouldShow}>
      {cart &&
        cart.map((item) => (
          <Fragment key={item.product.id}>
            <CartItem cartItem={item} />
          </Fragment>
        ))}

      <PrimaryButton
        onClick={() =>
          navigate('/checkout', { state: { productId: '' }, replace: true })
        }
      >
        Finalizar Compra
      </PrimaryButton>
    </CartContainer>
  );
};

export default Cart;
