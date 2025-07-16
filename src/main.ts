import express, {Request, Response, NextFunction} from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';
import { userRouter } from './routes/user/user-routes';
import { categoryRouter } from './routes/category/category-routes';
import { productRouter } from './routes/product/product-routes';
//import { productRouter } from './routes/product/product-routes';
//import { orderRouter } from './routes/order/order-routes';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/users', userRouter);
app.use('/category', categoryRouter);
app.use('/product', productRouter);
//app.use('/order', orderRouter);
app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return res.status(400).json({
            error: err.message
            
        });
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    });
});
app.listen(3333, ()=> console.log('Servidor online!!!'));
