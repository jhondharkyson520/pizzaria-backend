import { Request, Response } from "express";
import { PrismaUserRepository } from "../../repositories/user/prisma-user-repository";
import { CreateUser } from "../../use-cases/user/create-user";
import { PrismaCategoryRepository } from "../../repositories/category/prisma-category-repository";
import { CreateCategory } from "../../use-cases/category/create-category";

const categoryRepository = new PrismaCategoryRepository;
const createCategory = new CreateCategory(categoryRepository);

export const createCategoryController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {name} = req.body;
        const {category} =  await createCategory.execute(name);

        return res.status(201).json({
            sucess: 'Category created',
            user: {id: category.id, name: category.name}
        });
    } catch(error) {
        //console.error(error);        
        return res.status(500).json({error: 'Internal Server Error'});        
    }
}
