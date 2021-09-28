import { Order } from '.prisma/client';
export declare class OrdersService {
    create(createProductDto: Order): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: string): Promise<Order>;
    update(id: string, updateUserDto: Order): Promise<Order>;
    remove(id: string): Promise<Order>;
}
