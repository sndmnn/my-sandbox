import Product from '@modules/product/infrastructure/typeorm/entities/Product';

export default interface ProductsRepository {
  /**
   * Lists all products.
   */
  index(): Promise<Product[]>;

  /**
   * Finds a product by its ID.
   */
  findById(id: string): Promise<Product | undefined>;

  /**
   * Creates a new product.
   */
  create(productInfo: Omit<Product, 'id'>): Promise<Product>;

  /**
   * Delete a product.
   */
  delete(id: string): Promise<void>;
}
