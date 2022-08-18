import { container } from 'tsyringe';
import ProductsRepositoryTORM from '../../modules/product/infrastructure/repositories/ProductsRepositoryTORM';

container.register('ProductsRepository', {
  useClass: ProductsRepositoryTORM,
});
