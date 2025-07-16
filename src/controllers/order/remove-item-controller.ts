import { Request, Response } from "express";
import { PrismaOrderRepository } from "../../repositories/order/prisma-order-repository";
import { RemoveItemOrder } from "../../use-cases/order/remove-item";

const orderRepository = new PrismaOrderRepository;
const removeItemOrder = new RemoveItemOrder(orderRepository);

export const removeItemOrderController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {item_id} = req.query;
        if (!item_id || typeof item_id !== 'string') {
            return res.status(400).json({ error: 'item_id is required and must be a string' });
        }
        const item = await removeItemOrder.execute(item_id);    

        return res.status(201).json({
            sucess: 'Item removed',
            item: {item}
        });        
    } catch(error) {
        console.error(error);        
        return res.status(500).json({error: 'Internal Server Error'});        
    }
}