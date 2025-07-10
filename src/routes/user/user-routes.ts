import { Router } from 'express';
import { AuthUserController } from '../../controllers/user/AuthUserController';
import { CreateUserController } from '../../controllers/user/CreateUserController';
import { DetailUserController } from '../../controllers/user/DetailUserController';
import { isAuthenticated } from '../../middlewares/isAuthenticated';

const userRoutes = Router();
userRoutes.post('/users', new CreateUserController().handle);
userRoutes.post('/session', new AuthUserController().handle);
userRoutes.get('/me', isAuthenticated, new DetailUserController().handle);

export {userRoutes};
