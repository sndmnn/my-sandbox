import { inject, injectable } from 'tsyringe';
import Service from '../../../../shared/application/services/Service';
import Product, { CreateProductDTO } from '../models/Product';
import ProductsRepository from '../repositories/ProductsRepository';

@injectable()
export default class CreateProductService
  implements Service<CreateProductDTO, Product>
{
  constructor(
    @inject('ProductsRepository')
    private productsRepository: ProductsRepository
  ) {}

  execute(productInfo: CreateProductDTO): Product | Promise<Product> {
    const product = this.productsRepository.createProduct(productInfo);

    return product;
  }
}
