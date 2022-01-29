import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: any): void;
    findAll(): void;
    findOne(id: string): void;
    update(id: string, updateOrderDto: any): void;
    remove(id: string): void;
}
