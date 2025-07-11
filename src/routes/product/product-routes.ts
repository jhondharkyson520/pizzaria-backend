import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../../config/multer';
import { CreateProductController } from '../../controllers/product/CreateProductController';
import { ListByCategoryController } from '../../controllers/product/ListByCategoryController';
import { isAuthenticated } from '../../middlewares/isAuthenticated';

const productRouter = Router();
const upload = multer(uploadConfig.upload("./tmp"));
productRouter.post('/create', isAuthenticated, upload.single('file'), new CreateProductController().handle);
productRouter.get('/list-by-category', isAuthenticated, new ListByCategoryController().handle);

export {productRouter};
