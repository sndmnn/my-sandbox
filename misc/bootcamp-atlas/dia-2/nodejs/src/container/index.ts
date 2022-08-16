import { container } from 'tsyringe';
import ProductsRepositoryTORM from '../repositories/ProductsRepositoryTORM';

container.register('ProductsRepository', {
  useClass: ProductsRepositoryTORM,
});
