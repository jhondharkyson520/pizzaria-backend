import { v4 as uuidv4 } from 'uuid';
import { ProductRepository } from '../../repositories/product/product-repository';
import { Product } from '../../entities/product';

export class CreateProduct {
    constructor(private productRepository: ProductRepository) {};

    async execute({name, price, description, banner, category_id}: Product) {
        const product = await this.productRepository.create({
            name,
            price,
            description,
            banner,
            category_id
        });

        return {product}
    }
}
