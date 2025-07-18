import { OrderRepository } from '../../repositories/order/order-repository';

export class FinishOrder {
    constructor(private orderRepository: OrderRepository) {};

    async execute(order_id: string) {
        const order = await this.orderRepository.finish(order_id);
        return {order};
    }
}
