import { OrderRepository } from '../../repositories/order/order-repository';
import { Order } from '../../entities/order';

export class RemoveItemOrder {
    constructor(private orderRepository: OrderRepository) {};

    async execute(item_id: string) {
        const item = await this.orderRepository.removeItem(item_id);
        return {item}
    }
}
