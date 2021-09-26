import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createUserDto: any): Promise<import(".prisma/client").Product>;
    findAll(): Promise<(import(".prisma/client").Product & {
        category: import(".prisma/client").Category;
    })[]>;
    findOne(id: string): Promise<import(".prisma/client").Product>;
    update(id: string, updateUserDto: any): Promise<import(".prisma/client").Product>;
    remove(id: string): Promise<import(".prisma/client").Product>;
}
