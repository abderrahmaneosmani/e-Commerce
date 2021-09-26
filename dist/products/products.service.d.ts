import { Product } from '.prisma/client';
export declare class ProductsService {
    create(createProductDto: Product): Promise<Product>;
    findAll(): Promise<(Product & {
        category: import(".prisma/client").Category;
    })[]>;
    findOne(id: string): Promise<Product>;
    update(id: string, updateUserDto: Product): Promise<Product>;
    remove(id: string): Promise<Product>;
}
