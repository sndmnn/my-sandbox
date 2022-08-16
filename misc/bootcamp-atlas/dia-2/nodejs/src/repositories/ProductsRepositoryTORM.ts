import AppDataSource from '../database/DataSource';
import Product from '../database/entities/Product';
import { Repository } from 'typeorm';
import { CreateProductDTO } from 'models/Product';

export default class ProductsRepositoryTORM {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Product);
  }

  async getProducts(): Promise<Product[]> {
    const products = await this.ormRepository.find();

    return products;
  }

  async createProduct(product: CreateProductDTO): Promise<Product> {
    let newProduct = this.ormRepository.create(product);
    newProduct = await this.ormRepository.save(newProduct);

    return newProduct;
  }
}
