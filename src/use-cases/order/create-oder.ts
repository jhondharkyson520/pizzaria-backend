import { OrderRepository } from '../../repositories/order/order-repository';
import { Order } from '../../entities/order';

export class CreateOrder {
    constructor(private orderRepository: OrderRepository) {};

    async execute({table, status, draft, name}: Order) {
        const order = await this.orderRepository.create({
            table,
            status,
            draft,
            name
        });

        return {order}
    }
}
