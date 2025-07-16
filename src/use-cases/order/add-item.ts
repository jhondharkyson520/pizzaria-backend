import { OrderRepository } from '../../repositories/order/order-repository';

export class AddItemOrder {
    constructor(private orderRepository: OrderRepository) {};

    async execute(order_id: string, product_id: string, amount: number) {
        const order = await this.orderRepository.addItem(order_id, product_id, amount);
        return {order}
    }
}
