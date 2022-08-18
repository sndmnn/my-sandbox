import { Repository } from 'typeorm';
import Product from '../entities/Product';
import { CreateProductDTO } from '../../application/models/Product';
import ProductsRepository from '../../application/repositories/ProductsRepository';
import AppDataSource from '../../../../shared/infrastructure/database/DataSource';

export default class ProductsRepositoryTORM implements ProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Product);
  }

  createProduct(productInfo: CreateProductDTO): Product | Promise<Product> {
    const product = this.ormRepository.create(productInfo);
    this.ormRepository.save(product);

    return product;
  }

  getProducts() {
    const products = this.ormRepository.find();

    return products;
  }
}
