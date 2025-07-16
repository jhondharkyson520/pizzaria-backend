import prismaClient from "../../prisma";
import { OrderRepository } from "./order-repository";
import { Order } from "../../entities/order";
import { Item } from "@prisma/client";

export class PrismaOrderRepository implements OrderRepository {     
    async create(data: Order): Promise<Order> {
        return prismaClient.order.create({
            data: {
                table: data.table,
                status: data.status,
                draft: data.draft,
                name: data.name
            }
        });
    }

    async remove(order_id: string): Promise<Partial<Order>> {
        return prismaClient.order.delete({
            where: {
                id: order_id
            }
        });
    }

    async addItem(order_id: string, product_id: string, amount: number): Promise<Item> {
        return prismaClient.item.create({
            data: {
                order_id: order_id,
                product_id: product_id,
                amount
            }
        })
    }   
}
