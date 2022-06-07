import Product from '@modules/product/infrastructure/typeorm/entities/Product';
import Service from '@shared/application/services/Service';
import ProductsRepository from '../repositories/ProductsRepository';

export default class IndexProductsService implements Service<never, Product[]> {
  private productsRepository: ProductsRepository;

  constructor(productsRepository: ProductsRepository) {
    this.productsRepository = productsRepository;
  }

  async execute(): Promise<Product[]> {
    const products = await this.productsRepository.index();
    return products;
  }
}
