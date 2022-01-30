import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrdersService {
    create(createProductDto: CreateOrderDto): Promise<import(".prisma/client").Order>;
    findAll(): Promise<import(".prisma/client").Order[]>;
    findOne(id: string): Promise<import(".prisma/client").Order>;
    update(id: string, updateUserDto: UpdateOrderDto): Promise<import(".prisma/client").Order>;
    remove(id: string): Promise<import(".prisma/client").Order>;
}
