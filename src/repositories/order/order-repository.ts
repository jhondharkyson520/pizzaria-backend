import { Item } from "../../entities/item";
import { Order } from "../../entities/order";

export interface OrderRepository {
    create(order: Order): Promise<Order>;
    remove(order_id: string): Promise<Partial<Order>>;
    addItem(order_id: string, product_id: string, amount: number): Promise<Item>;
    removeItem(item_id: string): Promise<Item>;
    send(order_id: string): Promise<Order>;
}
