import { CreateProductDto } from './dto/crate-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(s: string): Promise<import(".prisma/client").Product[]>;
    create(createProductDto: CreateProductDto): Promise<import(".prisma/client").Product>;
    findByName(categoryId: string): any;
    sortProduct(sort: string): any;
    findOne(id: string): Promise<import(".prisma/client").Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<import(".prisma/client").Product>;
    remove(id: string): Promise<import(".prisma/client").Product>;
}
