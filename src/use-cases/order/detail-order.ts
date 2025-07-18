import { OrderRepository } from '../../repositories/order/order-repository';

export class DetailOrder {
    constructor(private orderRepository: OrderRepository) {};

    async execute(order_id: string) {
        const order = await this.orderRepository.detailOrder(order_id);
        return {order}
    }
}
