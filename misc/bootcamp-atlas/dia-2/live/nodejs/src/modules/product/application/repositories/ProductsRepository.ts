import Product, { CreateProductDTO } from '../models/Product';

export default interface ProductsRepository {
  getProducts(): Promise<Product[]> | Product[];
  createProduct(productInfo: CreateProductDTO): Promise<Product> | Product;
}
