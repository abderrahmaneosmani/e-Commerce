import { cartItem } from '.prisma/client';
export declare class CartitemsService {
    create(createCartItemDto: cartItem): Promise<cartItem>;
    findAll(): Promise<cartItem[]>;
    findOne(id: string): Promise<cartItem>;
    update(id: string, updateUserDto: cartItem): Promise<cartItem>;
    remove(id: string): Promise<cartItem>;
}
