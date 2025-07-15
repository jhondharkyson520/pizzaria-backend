import { Router } from 'express';
import { authenticateUserController } from '../../controllers/user/authenticate-user-controller';
import { createUserController } from '../../controllers/user/create-user-controller';
import { isAuthenticated } from '../../middlewares/isAuthenticated';
import { detailUserController } from '../../controllers/user/detail-user-controller';

const userRouter = Router();
userRouter.post('/create', createUserController);
//userRouter.post('/session', new AuthUserController().handle);
userRouter.post('/session', authenticateUserController);
userRouter.get('/me', isAuthenticated, detailUserController);

export {userRouter};
