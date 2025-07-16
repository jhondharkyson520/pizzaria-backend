import prismaClient from "../../prisma";
import { OrderRepository } from "./order-repository";
import { Order } from "../../entities/order";

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
}
