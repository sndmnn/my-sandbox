import React, { createContext, useState } from 'react';
import CartItem from '../models/CartItem';
import Product from '../models/Product';

interface CartContextState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  getCartCount: () => number;
  clearCart: () => void;
}

export const CartContext = createContext({} as CartContextState);

interface ComponentProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<ComponentProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const getCartCount = () =>
    cart.reduce((count, cartItem) => count + cartItem.quantity, 0);

  const addToCart = (product: Product) => {
    const itemInCart = cart.find((item) => item.product.id === product.id);

    if (itemInCart) {
      const newCart = cart.map((item) => {
        if (item.product.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

      setCart(newCart);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        getCartCount,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
