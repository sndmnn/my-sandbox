export default interface Product {
  id: string;
  name: string;
  price: number;
}

export type CreateProductDTO = Omit<Product, 'id'>;
