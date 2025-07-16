import { Router } from 'express';
import { createCategoryController } from '../../controllers/category/create-category-controller';

const categoryRouter = Router();
categoryRouter.post('/create', createCategoryController);

export {categoryRouter};
