import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../../config/multer';
import { createProductController } from '../../controllers/product/create-product-controller';
import { isAuthenticated } from '../../middlewares/isAuthenticated';
import { findByCategoryController } from '../../controllers/product/find-by-category-controller';

const upload = multer(uploadConfig.upload("./tmp"));
const productRouter = Router();

productRouter.post('/create', isAuthenticated, upload.single('file'), createProductController);
productRouter.get('/category/product', isAuthenticated, findByCategoryController);

export {productRouter};
