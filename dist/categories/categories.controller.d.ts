import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: any): void;
    findAll(): Promise<import(".prisma/client").Category[]>;
    findByName(name: string): any;
    findOne(id: string): void;
    update(id: string, updateCategoryDto: any): void;
    remove(id: string): void;
}
