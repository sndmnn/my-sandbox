import { Router } from 'express';
import CartController from '../controllers/CartController';

const cartRouter = Router();

cartRouter.get('/', CartController.listProducts);
cartRouter.post('/', CartController.addProduct);
cartRouter.delete('/', CartController.removeProduct);

export default cartRouter;
