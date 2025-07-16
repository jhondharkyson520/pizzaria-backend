import { Router } from 'express';
import { createCategoryController } from '../../controllers/category/create-category-controller';
import { listCategoryController } from '../../controllers/category/list-category-controller';

const categoryRouter = Router();
categoryRouter.post('/create', createCategoryController);
categoryRouter.get('/list', listCategoryController);

export {categoryRouter};
