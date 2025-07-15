import { Router } from 'express';
import { AuthUserController } from '../../controllers/user/AuthUserController';
import { CreateUserController } from '../../controllers/user/CreateUserController';
import { DetailUserController } from '../../controllers/user/DetailUserController';
import { isAuthenticated } from '../../middlewares/isAuthenticated';
import { authenticateUserController } from '../../controllers/user/authenticate-user-controller';

const userRouter = Router();
userRouter.post('/create', new CreateUserController().handle);
//userRouter.post('/session', new AuthUserController().handle);
userRouter.post('/session', authenticateUserController);
userRouter.get('/me', isAuthenticated, new DetailUserController().handle);

export {userRouter};
