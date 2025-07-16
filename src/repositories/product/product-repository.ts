import { Product } from "../../entities/product";

export interface ProductRepository {
    create(product: Product): Promise<Product>;
    listProductByCategory(category_id: string): Promise<Product[]>;
}
