import { inject, injectable } from 'tsyringe';
import Service from '../../../../shared/application/services/Service';
import Product from '../models/Product';
import ProductsRepository from '../repositories/ProductsRepository';

@injectable()
export default class GetProductsService implements Service<never, Product[]> {
  private productsRepository: ProductsRepository;

  constructor(
    @inject('ProductsRepository') productsRepository: ProductsRepository
  ) {
    this.productsRepository = productsRepository;
  }

  execute() {
    const products = this.productsRepository.getProducts();

    return products;
  }
}
