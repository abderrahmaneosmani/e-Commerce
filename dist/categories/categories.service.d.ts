import { Category } from '.prisma/client';
export declare class CategoriesService {
    create(createCategoryDto: Category): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: string): Promise<Category>;
    update(id: string, updateCategoryDto: Category): Promise<import(".prisma/client").User>;
    remove(id: string): Promise<Category>;
}
