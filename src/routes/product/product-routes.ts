import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../../config/multer';
import { CreateProductController } from '../../controllers/product/CreateProductController';
import { ListByCategoryController } from '../../controllers/product/ListByCategoryController';
import { isAuthenticated } from '../../middlewares/isAuthenticated';

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));
router.post('/create', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.get('/category', isAuthenticated, new ListByCategoryController().handle);

export {router};
