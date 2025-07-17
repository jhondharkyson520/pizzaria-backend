import { OrderRepository } from '../../repositories/order/order-repository';

export class SendOrder {
    constructor(private orderRepository: OrderRepository) {};

    async execute(order_id: string) {
        const order = await this.orderRepository.send(order_id);
        return {order}
    }
}