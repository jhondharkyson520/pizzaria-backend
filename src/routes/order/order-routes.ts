import { Router } from 'express';
import { AddItemController } from '../../controllers/order/AddItemController';
import { CreateOrderController } from '../../controllers/order/CreateOrderController';
import { DetailOrderController } from '../../controllers/order/DetailOrderController';
import { FinishOrderController } from '../../controllers/order/FinishOrderController';
import { ListOrdersController } from '../../controllers/order/ListOrdersController';
import { RemoveItemController } from '../../controllers/order/RemoveItemController';
import { RemoveOrderController } from '../../controllers/order/RemoveOrderController';
import { SendOrderController } from '../../controllers/order/SendOrderController';
import { isAuthenticated } from '../../middlewares/isAuthenticated';

const orderRouter = Router();
orderRouter.post('/create', isAuthenticated, new CreateOrderController().handle);
orderRouter.delete('/remove', isAuthenticated, new RemoveOrderController().handle);
orderRouter.post('/add-item', isAuthenticated, new AddItemController().handle);
orderRouter.delete('/remove-item', isAuthenticated, new RemoveItemController().handle);
orderRouter.put('/send', isAuthenticated, new SendOrderController().handle);
orderRouter.get('/list-all', isAuthenticated, new ListOrdersController().handle);
orderRouter.get('/detail', isAuthenticated, new DetailOrderController().handle);
orderRouter.put('/finish', isAuthenticated, new FinishOrderController().handle);

export {orderRouter};
