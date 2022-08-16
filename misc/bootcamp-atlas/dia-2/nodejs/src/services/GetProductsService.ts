import { inject, injectable } from 'tsyringe';
import Product from '../models/Product';
import ProductsRepository from '../repositories/ProductsRepository';

@injectable()
export default class GetProductsService {
  private productsRepository: ProductsRepository;

  constructor(
    @inject('ProductsRepository')
    productsRepository: ProductsRepository
  ) {
    this.productsRepository = productsRepository;
  }

  execute(): Promise<Product[]> | Product[] {
    const products = this.productsRepository.getProducts();

    return products;
  }
}
