import GetProductsService from '../../application/services/GetProductsService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProductService from '../../application/services/CreateProductService';

export default class ProductsController {
  static async getProducts(_: Request, response: Response): Promise<Response> {
    const getProductsService = container.resolve(GetProductsService);
    const products = await getProductsService.execute();

    return response.status(200).json(products);
  }

  static async createProduct(
    request: Request,
    response: Response
  ): Promise<Response> {
    const productInfo = request.body;

    const createProductsService = container.resolve(CreateProductService);
    const product = await createProductsService.execute(productInfo);

    return response.status(201).json(product);
  }
}
