import { CreateCategoryDto } from './dto/crate-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoriesService {
    create(createCategoryDto: CreateCategoryDto): Promise<import(".prisma/client").Category>;
    findAll(): Promise<import(".prisma/client").Category[]>;
    findOne(id: string): Promise<import(".prisma/client").Category>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<import(".prisma/client").User>;
    remove(id: string): Promise<import(".prisma/client").Category>;
    findByName(name: string): Promise<import(".prisma/client").Category[]>;
}
