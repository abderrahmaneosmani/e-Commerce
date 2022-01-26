import { Product } from '.prisma/client';
export declare class ProductsService {
    create(createProductDto: Product): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    update(id: string, updateUserDto: Product): Promise<Product>;
    remove(id: string): Promise<Product>;
    findByCategoryId(categoryId: string): Promise<Product[]>;
}
