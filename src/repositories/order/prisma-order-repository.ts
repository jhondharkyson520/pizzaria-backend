import prismaClient from "../../prisma";
import { OrderRepository } from "./order-repository";
import { Order } from "../../entities/order";
import { Item } from "../../entities/item";

export class PrismaOrderRepository implements OrderRepository {    
    async create(data: Order): Promise<Order> {
        return await prismaClient.order.create({
            data: {
                table: data.table,
                status: data.status,
                draft: data.draft,
                name: data.name
            }
        });
    }

    async remove(order_id: string): Promise<Partial<Order>> {
        return await prismaClient.order.delete({
            where: {
                id: order_id
            }
        });
    }

    async addItem(order_id: string, product_id: string, amount: number): Promise<Item> {
        return await prismaClient.item.create({
            data: {
                order_id: order_id,
                product_id: product_id,
                amount
            }
        })
    }

    async removeItem(item_id: string): Promise<Item> {
        return await prismaClient.item.delete({
            where: {
                id: item_id
            }
        });
    }
    
    async send(order_id: string): Promise<Order> {
        return await prismaClient.order.update({
            where: {
                id: order_id
            },
            data: {
                draft: false
            }
        });
    }

    async listAllOrders(): Promise<Order[]> {
        return await prismaClient.order.findMany({
            where: {
                draft: false,
                status: false
            },
            orderBy: {
                created_at: 'desc'
            }
        });
    }

    async detailOrder(order_id: string): Promise<Item[]> {
        return await prismaClient.item.findMany({
            where: {
                order_id: order_id
            },
            include: {
                product: true,
                order: true
            }
        });
    }

    async finish(order_id: string): Promise<Order> {
        return await prismaClient.order.update({
            where: {
                id: order_id
            },
            data: {
                status: true
            }
        });
    }
}
