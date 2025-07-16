import { Request, Response } from "express";
import { CreateProduct } from "../../use-cases/product/create-product";
import { PrismaProductRepository } from "../../repositories/product/prisma-product-repository";

const productRepository = new PrismaProductRepository;
const createProduct = new CreateProduct(productRepository);

export const createProductController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {name, price, description, category_id} = req.body;

        if(!req.file){
            throw new Error("error upload file")
        } else{
            const {originalname, filename: banner} = req.file;
            const product = await createProduct.execute({
                name,
                price,
                description,
                banner,
                category_id
        });    

        return res.status(201).json({
            sucess: 'Product created',
            product: {product}
        });
        }
    } catch(error) {
        console.error(error);        
        return res.status(500).json({error: 'Internal Server Error'});        
    }
}
