import { OrderRepository } from '../../repositories/order/order-repository';
import { Order } from '../../entities/order';

export class RemoveOrder {
    constructor(private orderRepository: OrderRepository) {};

    async execute(order_id: string) {
        const order = await this.orderRepository.remove(order_id);
        return {order}
    }
}
