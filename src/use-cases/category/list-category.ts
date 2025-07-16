import { CategoryRepository } from "../../repositories/category/category-repository";

export class ListCategory {
    constructor(private categoryRepository: CategoryRepository) {};

    async execute() {
        const category = await this.categoryRepository.find();
        return {category}
    }
}
