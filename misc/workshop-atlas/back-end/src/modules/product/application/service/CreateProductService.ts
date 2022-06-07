import Product from '@modules/product/infrastructure/typeorm/entities/Product';
import Service from '@shared/application/services/Service';
import ProductsRepository from '../repositories/ProductsRepository';

type ServiceParams = Omit<Product, 'id'>;

export default class CreateProductService
  implements Service<ServiceParams, Product>
{
  private productsRepository: ProductsRepository;

  constructor(productsRepository: ProductsRepository) {
    this.productsRepository = productsRepository;
  }

  async execute({ name, price }: ServiceParams): Promise<Product> {
    const product = await this.productsRepository.create({
      name,
      price,
    });

    return product;
  }
}
