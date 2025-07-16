import { Request, Response } from "express";
import { PrismaOrderRepository } from "../../repositories/order/prisma-order-repository";
import { AddItemOrder } from "../../use-cases/order/add-item";

const orderRepository = new PrismaOrderRepository;
const addItemOrder = new AddItemOrder(orderRepository);

export const addItemOrderController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {order_id, product_id, amount} = req.body;
        const order = await addItemOrder.execute(order_id, product_id, amount);    

        return res.status(201).json({
            sucess: 'Item add order success',
            order: {order}
        });        
    } catch(error) {
        //console.error(error);        
        return res.status(500).json({error: 'Internal Server Error'});        
    }
}
