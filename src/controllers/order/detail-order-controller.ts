import { Request, Response } from "express";
import { PrismaOrderRepository } from "../../repositories/order/prisma-order-repository";
import { DetailOrder } from "../../use-cases/order/detail-order";

const orderRepository = new PrismaOrderRepository;
const detailOrder = new DetailOrder(orderRepository);

export const detailOrderController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {order_id} = req.body;
        const order = await detailOrder.execute(order_id);    

        return res.status(201).json({
            sucess: 'Detail order',
            details: {order}
        });        
    } catch(error) {
        //console.error(error);        
        return res.status(500).json({error: 'Internal Server Error'});        
    }
}
