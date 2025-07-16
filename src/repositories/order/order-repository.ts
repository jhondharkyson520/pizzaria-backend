import { Order } from "../../entities/order";

export interface OrderRepository {
    create(order: Order): Promise<Order>;
    remove(order_id: string): Promise<Partial<Order>>;
}
