import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): Promise<import(".prisma/client").Order>;
    findAll(): Promise<import(".prisma/client").Order[]>;
    findOne(id: string): Promise<import(".prisma/client").Order>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<import(".prisma/client").Order>;
    remove(id: string): Promise<import(".prisma/client").Order>;
}
