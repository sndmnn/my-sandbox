import useSWR from 'swr';
import Product from '../../models/Product';
import { fetcher } from './swr';

export default function useProducts() {
  const { data, error } = useSWR<Product[]>('/products', fetcher);

  return {
    products: data,
    error,
    isLoading: !error && !data,
  };
}
