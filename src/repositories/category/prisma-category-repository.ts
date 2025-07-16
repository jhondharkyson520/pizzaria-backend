import { Category } from "../../entities/category";
import prismaClient from "../../prisma";
import { CategoryRepository } from "./category-repository";

export class PrismaCategoryRepository implements CategoryRepository {
    async create(category: Category): Promise<Category> {
        return prismaClient.category.create({
            data: {
                id: category.id,
                name: category.name
            },
            select: {
                id: true,
                name: true
            }
        });
    }

    async find(): Promise<Category[]> {
        return prismaClient.category.findMany({
            select: {
                id: true,
                name: true
            }
        });
    }    
}
