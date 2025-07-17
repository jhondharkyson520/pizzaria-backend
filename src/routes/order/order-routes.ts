import { Router } from 'express';
import { isAuthenticated } from '../../middlewares/isAuthenticated';
import { createOrderController } from '../../controllers/order/create-order-controller';
import { removeOrderController } from '../../controllers/order/remove-order-controller';
import { addItemOrderController } from '../../controllers/order/add-item-controller';
import { removeItemOrderController } from '../../controllers/order/remove-item-controller';
import { sendOrderController } from '../../controllers/order/send-order-controller';

const orderRouter = Router();

orderRouter.post('/create', isAuthenticated, createOrderController);
orderRouter.delete('/remove', isAuthenticated, removeOrderController);
orderRouter.post('/add-item', isAuthenticated, addItemOrderController);
orderRouter.delete('/remove-item', isAuthenticated, removeItemOrderController);
orderRouter.put('/send', isAuthenticated, sendOrderController);

export {orderRouter};
