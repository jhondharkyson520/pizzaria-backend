import { OrderRepository } from '../../repositories/order/order-repository';

export class ListAllOrders {
    constructor(private orderRepository: OrderRepository) {};

    async execute() {
        const orders = await this.orderRepository.listAllOrders();
        return {orders}
    }
}
