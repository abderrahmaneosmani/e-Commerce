import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: any): void;
    findAll(): Promise<import(".prisma/client").Product[]>;
    findByName(categoryId: string): any;
    findOne(id: string): Promise<import(".prisma/client").Product>;
    update(id: string, updateProductDto: any): Promise<import(".prisma/client").Product>;
    remove(id: string): Promise<import(".prisma/client").Product>;
}
