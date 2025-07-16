import { Category } from "../../entities/category";

export interface CategoryRepository {
    create(category: Category): Promise<Category>;
    find(): Promise<Category[]>;
}
