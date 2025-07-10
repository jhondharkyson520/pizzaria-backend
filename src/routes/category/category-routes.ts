import { Router } from 'express';
import { CreateCategoryController } from '../../controllers/category/CreateCategoryController';
import { ListCategoryController } from '../../controllers/category/ListCategoryController';
import { isAuthenticated } from '../../middlewares/isAuthenticated';

const categoryRouter = Router();
categoryRouter.post('/create', isAuthenticated, new CreateCategoryController().handle);
categoryRouter.get('/list', isAuthenticated, new ListCategoryController().handle);

export {categoryRouter};
