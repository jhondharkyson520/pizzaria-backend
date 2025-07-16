import { Order } from "../../entities/order";
import { Item } from "@prisma/client";

export interface OrderRepository {
    create(order: Order): Promise<Order>;
    remove(order_id: string): Promise<Partial<Order>>;
    addItem(order_id: string, product_id: string, amount: number): Promise<Item>;
}
