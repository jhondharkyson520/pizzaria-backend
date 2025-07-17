import { Request, Response } from "express";
import { PrismaOrderRepository } from "../../repositories/order/prisma-order-repository";
import { SendOrder } from "../../use-cases/order/send-order";

const orderRepository = new PrismaOrderRepository;
const sendOrder = new SendOrder(orderRepository);

export const sendOrderController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {order_id} = req.body;
        const order = await sendOrder.execute(order_id);    

        return res.status(201).json({
            sucess: 'Order send success',
            send: {order}
        });        
    } catch(error) {
        //console.error(error);        
        return res.status(500).json({error: 'Internal Server Error'});        
    }
}
