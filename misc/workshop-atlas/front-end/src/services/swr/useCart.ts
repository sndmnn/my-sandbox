/* eslint-disable no-alert */
import { useCallback } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import Product from '../../models/Product';
import api from '../api';
import { fetcher } from './swr';

export default function useCart() {
  const { data, error } = useSWR<Product[]>('/cart/', fetcher);

  const { mutate } = useSWRConfig();

  const addToCart = useCallback((productId: string) => {
    api
      .post('/cart/', { productId })
      .catch(() => alert('erro ao adicionar produto ao carrinho'))
      .finally(() => mutate('/cart/'));
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    if (data)
      mutate(
        '/cart/',
        data.filter(product => product.id !== productId),
        false,
      );

    api
      .delete('/cart/', { data: { productId } })
      .catch(() => alert('erro ao remover produto'))
      .finally(() => mutate('/cart/'));
  }, []);

  const getCartCount = useCallback(() => data?.length, [data]);

  return {
    cart: data,
    addToCart,
    removeFromCart,
    getCartCount,
    error,
    isLoading: !error && !data,
  };
}
