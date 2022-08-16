import { inject, injectable } from 'tsyringe';
import ProductsRepository from '../repositories/ProductsRepository';
import Product, { CreateProductDTO } from '../models/Product';
import Service from './Service';

@injectable()
export default class CreateProductService
  implements Service<CreateProductDTO, Product>
{
  constructor(
    @inject('ProductsRepository')
    private productsRepository: ProductsRepository
  ) {}

  execute(productInfo: CreateProductDTO): Product | Promise<Product> {
    const newProduct = this.productsRepository.createProduct(productInfo);

    return newProduct;
  }
}
