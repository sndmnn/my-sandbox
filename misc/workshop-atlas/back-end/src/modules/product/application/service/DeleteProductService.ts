import Service from '@shared/application/services/Service';
import ProductsRepository from '../repositories/ProductsRepository';

interface ServiceParams {
  productId: string;
}

export default class DeleteProductService
  implements Service<ServiceParams, void>
{
  private productsRepository: ProductsRepository;

  constructor(productsRepository: ProductsRepository) {
    this.productsRepository = productsRepository;
  }

  async execute({ productId }: ServiceParams): Promise<void> {
    await this.productsRepository.delete(productId);
  }
}
