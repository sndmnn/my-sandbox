import Product, { CreateProductDTO } from '../models/Product';
import ProductsRepository from './ProductsRepository';

export default class ProductsRepositoryMemory implements ProductsRepository {
  private static products: Product[];

  constructor() {
    ProductsRepositoryMemory.products = [
      {
        id: '1',
        name: 'Garrafa Térmica',
        price: 25.0,
      },
      {
        id: '2',
        name: 'Pregador de Roupas',
        price: 22.0,
      },
      {
        id: '3',
        name: 'Brinco',
        price: 32.0,
      },
    ];
  }

  createProduct(product: CreateProductDTO): Product {
    const lastIndex = ProductsRepositoryMemory.products.length - 1;
    const lastProduct = ProductsRepositoryMemory.products[lastIndex];
    const nextId = Number.parseInt(lastProduct.id) + 1;
    const newProduct = {
      id: String(nextId),
      ...product,
    };

    ProductsRepositoryMemory.products.push(newProduct);

    return newProduct;
  }

  getProducts(): Product[] {
    return ProductsRepositoryMemory.products;
  }
}
