import { Request, Response } from "express";
import { PrismaOrderRepository } from "../../repositories/order/prisma-order-repository";
import { AddItemOrder } from "../../use-cases/order/add-item";
import { FinishOrder } from "../../use-cases/order/finish-order";

const orderRepository = new PrismaOrderRepository;
const finishOrder = new FinishOrder(orderRepository);

export const finishOrderController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {order_id} = req.body;
        const order = await finishOrder.execute(order_id);    

        return res.status(201).json({
            sucess: 'Finish order success',
            finish: {order}
        });        
    } catch(error) {
        //console.error(error);        
        return res.status(500).json({error: 'Internal Server Error'});        
    }
}
