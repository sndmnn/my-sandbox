import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

const productRouter = Router();

productRouter.get('/index', ProductsController.indexProducts);

productRouter.post('/register', ProductsController.createProduct);

productRouter.delete('/delete/:id', ProductsController.deleteProduct);

export default productRouter;
