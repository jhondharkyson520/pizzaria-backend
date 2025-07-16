import { Router } from 'express';
import { isAuthenticated } from '../../middlewares/isAuthenticated';
import { createOrderController } from '../../controllers/order/create-order-controller';
import { removeOrderController } from '../../controllers/order/remove-order-controller';
import { addItemOrderController } from '../../controllers/order/add-item-controller';

const orderRouter = Router();

orderRouter.post('/create', isAuthenticated, createOrderController);
orderRouter.delete('/remove', isAuthenticated, removeOrderController);
orderRouter.post('/add-item', isAuthenticated, addItemOrderController);

export {orderRouter};
