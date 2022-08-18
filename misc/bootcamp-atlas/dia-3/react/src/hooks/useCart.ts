import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export default function useCart() {
  const cart = useContext(CartContext);

  return cart;
}
