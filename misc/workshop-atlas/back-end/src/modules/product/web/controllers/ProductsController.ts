import CreateProductService from '@modules/product/application/service/CreateProductService';
import DeleteProductService from '@modules/product/application/service/DeleteProductService';
import IndexProductsService from '@modules/product/application/service/IndexProductsService';
import ProductsRepositoryTORM from '@modules/product/infrastructure/typeorm/repositories/ProductsRepositoryTORM';
import { Request, Response } from 'express';

export default class ProductsController {
  static async indexProducts(
    _: Request,
    response: Response,
  ): Promise<Response> {
    const productRepository = new ProductsRepositoryTORM();
    const indexProductsService = new IndexProductsService(productRepository);

    const products = await indexProductsService.execute();

    return response.status(200).json(products);
  }

  static async createProduct(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { name, price } = request.body;

    const productRepository = new ProductsRepositoryTORM();
    const createProductService = new CreateProductService(productRepository);

    const product = await createProductService.execute({ name, price });

    return response.status(201).json(product);
  }

  static async deleteProduct(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id: productId } = request.params;

    const productRepository = new ProductsRepositoryTORM();
    const deleteProductService = new DeleteProductService(productRepository);

    await deleteProductService.execute({ productId });

    return response.sendStatus(200);
  }
}
