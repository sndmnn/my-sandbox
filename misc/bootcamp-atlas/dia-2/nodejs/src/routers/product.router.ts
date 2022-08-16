import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

const productRouter = Router();

productRouter.get('/', ProductsController.getProducts);

productRouter.post('/register', ProductsController.createProduct);

export default productRouter;
