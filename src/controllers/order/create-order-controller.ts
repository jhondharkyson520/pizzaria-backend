import { Request, Response } from "express";
import { PrismaUserRepository } from "../../repositories/user/prisma-user-repository";
import { CreateUser } from "../../use-cases/user/create-user";
import { PrismaOrderRepository } from "../../repositories/order/prisma-product-repository";
import { CreateOrder } from "../../use-cases/order/create-oder";

const orderRepository = new PrismaOrderRepository;
const createOrder = new CreateOrder(orderRepository);

export const createOrderController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {table, status, draft, name} = req.body;
        const order = await createOrder.execute({
            table,
            status,
            draft,
            name
        });    

        return res.status(201).json({
            sucess: 'Order created',
            order: {order}
        });        
    } catch(error) {
        console.error(error);        
        return res.status(500).json({error: 'Internal Server Error'});        
    }
}