import { Request, Response } from "express";
import { PrismaCategoryRepository } from "../../repositories/category/prisma-category-repository";
import { ListCategory } from "../../use-cases/category/list-category";

const categoryRepository = new PrismaCategoryRepository;
const listCategory = new ListCategory(categoryRepository);

export const listCategoryController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {category} =  await listCategory.execute();

        return res.status(201).json({
            sucess: 'Category list',
            category
        });
    } catch(error) {
        //console.error(error);        
        return res.status(500).json({error: 'Internal Server Error'});        
    }
}
