import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsService {
    create(createProductDto: any): Promise<import(".prisma/client").Product>;
    findAll(s: string): Promise<import(".prisma/client").Product[]>;
    findOne(id: string): Promise<import(".prisma/client").Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<import(".prisma/client").Product>;
    remove(id: string): Promise<import(".prisma/client").Product>;
    findByCategoryId(categoryId: string): Promise<import(".prisma/client").Product[]>;
    sortProducts(sort: string): Promise<import(".prisma/client").Product[]>;
}
