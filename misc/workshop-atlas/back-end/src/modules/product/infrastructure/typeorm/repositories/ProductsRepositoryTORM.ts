import { Repository, getRepository } from 'typeorm';
import ProductRepository from '@modules/product/application/repositories/ProductsRepository';
import Product from '../entities/Product';

export default class ProductsRepositoryTORM implements ProductRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  async index(): Promise<Product[]> {
    const products = await this.ormRepository.find();
    return products;
  }

  async findById(id: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne({
      where: { id },
    });

    return product;
  }

  async create(productInfo: Omit<Product, 'id'>): Promise<Product> {
    let product = this.ormRepository.create(productInfo);
    product = await this.ormRepository.save(product);

    return product;
  }

  async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
