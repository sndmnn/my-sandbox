import Product, { CreateProductDTO } from '../models/Product';

export default interface ProductsRepository {
  getProducts(): Promise<Product[]> | Product[];
  createProduct(product: CreateProductDTO): Promise<Product> | Product;
}
