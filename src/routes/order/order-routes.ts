import { Router } from 'express';
import { isAuthenticated } from '../../middlewares/isAuthenticated';
import { createOrderController } from '../../controllers/order/create-order-controller';

const orderRouter = Router();

orderRouter.post('/create', isAuthenticated, createOrderController);
//orderRouter.get('/category/product', isAuthenticated, findByCategoryController);

export {orderRouter};
