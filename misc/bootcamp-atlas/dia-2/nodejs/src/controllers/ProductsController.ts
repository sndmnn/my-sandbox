import { Request, Response } from 'express';
import CreateProductService from '../services/CreateProductService';
import { container } from 'tsyringe';
import GetProductsService from '../services/GetProductsService';

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

    const createProductService = container.resolve(CreateProductService);
    const product = await createProductService.execute(productInfo);

    return response.status(201).json(product);
  }
}
