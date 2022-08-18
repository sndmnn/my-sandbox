import { useContext } from 'react';
import { CartContext } from '../contexts/CartContex';

export default function useCart() {
  const cart = useContext(CartContext);
  return cart;
}
