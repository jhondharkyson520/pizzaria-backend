import { Request, Response } from "express";
import { PrismaOrderRepository } from "../../repositories/order/prisma-order-repository";
import { ListAllOrders } from "../../use-cases/order/list-all-orders";

const orderRepository = new PrismaOrderRepository;
const listAllOrders = new ListAllOrders(orderRepository);

export const listAllOrdersController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const order = await listAllOrders.execute();
        return res.status(201).json({
            sucess: 'list of orders that are not in the draft',
            orders: {order}
        });        
    } catch(error) {
        //console.error(error);        
        return res.status(500).json({error: 'Internal Server Error'});        
    }
}
