import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/crate-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto): Promise<import(".prisma/client").Category>;
    findAll(): Promise<import(".prisma/client").Category[]>;
    findByTitle(title: string): any;
    findOne(id: string): Promise<import(".prisma/client").Category>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<import(".prisma/client").User>;
    remove(id: string): Promise<import(".prisma/client").Category>;
}
