import Product, { CreateProductDTO } from '../../application/models/Product';
import ProductsRepository from '../../application/repositories/ProductsRepository';

export default class ProductsRepositoryMemory implements ProductsRepository {
  private static products: Product[];

  constructor() {
    ProductsRepositoryMemory.products = [
      {
        id: '1',
        name: 'Garrafa Térmica',
        price: 25.0,
      },
      {
        id: '2',
        name: 'Pregador de Roupas',
        price: 22.0,
      },
      {
        id: '3',
        name: 'Brinco',
        price: 32.0,
      },
    ];
  }

  createProduct(productInfo: CreateProductDTO): Product | Promise<Product> {
    throw new Error('Method not implemented.');
  }

  getProducts() {
    return ProductsRepositoryMemory.products;
  }
}
