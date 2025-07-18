import { Router } from 'express';
import { isAuthenticated } from '../../middlewares/isAuthenticated';
import { createOrderController } from '../../controllers/order/create-order-controller';
import { removeOrderController } from '../../controllers/order/remove-order-controller';
import { addItemOrderController } from '../../controllers/order/add-item-controller';
import { removeItemOrderController } from '../../controllers/order/remove-item-controller';
import { sendOrderController } from '../../controllers/order/send-order-controller';
import { listAllOrdersController } from '../../controllers/order/list-all-orders-controller';
import { detailOrderController } from '../../controllers/order/detail-order-controller';
import { finishOrderController } from '../../controllers/order/finish-order-controller';

const orderRouter = Router();

orderRouter.post('/create', isAuthenticated, createOrderController);
orderRouter.delete('/remove', isAuthenticated, removeOrderController);
orderRouter.post('/add-item', isAuthenticated, addItemOrderController);
orderRouter.delete('/remove-item', isAuthenticated, removeItemOrderController);
orderRouter.put('/send', isAuthenticated, sendOrderController);
orderRouter.get('/list-all', isAuthenticated, listAllOrdersController);
orderRouter.get('/detail', isAuthenticated, detailOrderController);
orderRouter.put('/finish', isAuthenticated, finishOrderController);

export {orderRouter};
