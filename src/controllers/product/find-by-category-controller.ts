import { Request, Response } from "express";
import { PrismaCategoryRepository } from "../../repositories/category/prisma-category-repository";
import { ListCategory } from "../../use-cases/category/list-category";
import { FindByCategory } from "../../use-cases/product/find-by-category";
import { PrismaProductRepository } from "../../repositories/product/prisma-product-repository";

const productRepository = new PrismaProductRepository;
const findByCategory = new FindByCategory(productRepository);

export const findByCategoryController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const category_id = req.query.category_id as string;
        const {product} =  await findByCategory.execute(category_id);

        return res.status(201).json({
            sucess: 'Product find by category list',
            product
        });
    } catch(error) {
        //console.error(error);        
        return res.status(500).json({error: 'Internal Server Error'});        
    }
}
