import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createUserDto: any): Promise<import(".prisma/client").Category>;
    findAll(): Promise<import(".prisma/client").Category[]>;
    findOne(id: string): Promise<import(".prisma/client").Category>;
    update(id: string, updateUserDto: any): Promise<import(".prisma/client").User>;
    remove(id: string): Promise<import(".prisma/client").Category>;
}
