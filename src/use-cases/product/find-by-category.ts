import { CategoryRepository } from "../../repositories/category/category-repository";
import { ProductRepository } from "../../repositories/product/product-repository";

export class FindByCategory {
    constructor(private productRepository: ProductRepository) {};

    async execute(category_id: string) {
        const product = await this.productRepository.listProductByCategory(category_id);
        return {product}
    }
}
