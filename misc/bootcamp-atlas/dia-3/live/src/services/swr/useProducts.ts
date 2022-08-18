import useSWR, { mutate } from 'swr';
import Product from '../../models/Product';
import api from '../api';
import { fetcher } from './swr';

export default function useProducts() {
  const { data, error } = useSWR<Product[]>('/products', fetcher);

  const addProudct = (product: Product) => {
    if (!data) return;

    mutate('/products', [...data, product], false);
    api.post('/products', product).finally(() => mutate('/products'));
  };

  return {
    products: data || [],
    error,
    isLoading: !data && !error,
  };
}
