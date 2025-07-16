import { v4 as uuidv4 } from 'uuid';
import { CategoryRepository } from "../../repositories/category/category-repository";

export class CreateCategory {
    constructor(private categoryRepository: CategoryRepository) {};

    async execute(name: string) {
        const category = await this.categoryRepository.create({
            id: uuidv4(),
            name
        });

        return {category}
    }
}
