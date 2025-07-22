import { Router } from 'express';
import { createCategoryController } from '../../controllers/category/create-category-controller';
import { listCategoryController } from '../../controllers/category/list-category-controller';
import { isAuthenticated } from '../../middlewares/isAuthenticated';

const categoryRouter = Router();
categoryRouter.post('/create', isAuthenticated, createCategoryController);
categoryRouter.get('/list', isAuthenticated, listCategoryController);

export {categoryRouter};
