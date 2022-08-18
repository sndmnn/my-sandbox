import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

const productsRouter = Router();

productsRouter.get('/', ProductsController.getProducts);

productsRouter.post('/register', ProductsController.createProduct);

export default productsRouter;
