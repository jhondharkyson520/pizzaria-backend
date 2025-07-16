import { Prisma } from "@prisma/client";
import { Product } from "../../entities/product";
import prismaClient from "../../prisma";
import { ProductRepository } from "./product-repository";

export class PrismaProductRepository implements ProductRepository {
    async create(data: Product): Promise<Product> {
        return prismaClient.product.create({
            data: {
                name: data.name,
                price: data.price,
                description: data.description,
                banner: data.banner,
                category_id: data.category_id,
            } as Prisma.ProductUncheckedCreateInput,
        });
    }
    async listProductByCategory(category_id: string): Promise<Product[]> {
        return prismaClient.product.findMany({
            where: {
                category_id: category_id
            }
        });
    }
}
