import React, { useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import useCart from '../../hooks/useCart';
import CartMenu from './Cart';
import { Cart, NavBarContainer, NavBarContent } from './NavigationBar.styles';

const NavigationBar: React.FC = () => {
  const { getCartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <NavBarContainer>
      <NavBarContent>
        <p className="color-store-logo">
          <b className="bold">Product</b>Store
        </p>

        <Cart onClick={() => setIsCartOpen((prevVal) => !prevVal)}>
          <MdShoppingCart className="shopping-cart-icon" />
          <p className="item-count">{getCartCount()}</p>

          <CartMenu shouldShow={isCartOpen} />
        </Cart>
      </NavBarContent>
    </NavBarContainer>
  );
};

export default NavigationBar;
