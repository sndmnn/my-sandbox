export type CreateProductDTO = Omit<Product, 'id'>;

export default interface Product {
  id: string;
  name: string;
  price: number;
}
