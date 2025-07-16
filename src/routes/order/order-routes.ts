import { Router } from 'express';
import { isAuthenticated } from '../../middlewares/isAuthenticated';
import { createOrderController } from '../../controllers/order/create-order-controller';
import { removeOrderController } from '../../controllers/order/remove-order-controller';

const orderRouter = Router();

orderRouter.post('/create', isAuthenticated, createOrderController);
orderRouter.delete('/remove', isAuthenticated, removeOrderController);

export {orderRouter};
