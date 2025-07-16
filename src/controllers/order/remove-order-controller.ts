import { Request, Response } from "express";
import { PrismaUserRepository } from "../../repositories/user/prisma-user-repository";
import { CreateUser } from "../../use-cases/user/create-user";
import { PrismaOrderRepository } from "../../repositories/order/prisma-order-repository";
import { CreateOrder } from "../../use-cases/order/create-oder";
import { RemoveOrder } from "../../use-cases/order/remove-order";

const orderRepository = new PrismaOrderRepository;
const removeOrder = new RemoveOrder(orderRepository);

export const removeOrderController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {order_id} = req.query;
        if (!order_id || typeof order_id !== 'string') {
            return res.status(400).json({ error: 'order_id is required and must be a string' });
        }
        const order = await removeOrder.execute(order_id);    

        return res.status(201).json({
            sucess: 'Order removed',
            order: {order}
        });        
    } catch(error) {
        console.error(error);        
        return res.status(500).json({error: 'Internal Server Error'});        
    }
}