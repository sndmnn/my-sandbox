import Product from '@modules/product/infrastructure/typeorm/entities/Product';
import ProductsRepositoryTORM from '@modules/product/infrastructure/typeorm/repositories/ProductsRepositoryTORM';
import { Request, Response } from 'express';

export default class CartController {
  static products: Product[] = [];

  static async addProduct(request: Request, response: Response) {
    const { productId } = request.body;

    const productsRepository = new ProductsRepositoryTORM();

    const product = await productsRepository.findById(productId);

    if (product) {
      CartController.products.push(product);

      return response.sendStatus(201);
    }

    return response.sendStatus(400);
  }

  static async removeProduct(request: Request, response: Response) {
    const { productId } = request.body;

    const productIndex = CartController.products.findIndex(
      product => product.id === productId,
    );

    if (productIndex >= 0) {
      CartController.products.splice(productIndex, 1);

      return response.sendStatus(204);
    }

    return response.sendStatus(400);
  }

  static async listProducts(_: Request, response: Response) {
    return response.json(CartController.products);
  }
}
