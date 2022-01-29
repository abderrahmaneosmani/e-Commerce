import { cartItem } from '.prisma/client';
import { CreateCartItemDto } from './dto/create-cartItem.dto';
import { UpdateCartItemDto } from './dto/update-cartItem';
export declare class CartItemService {
    create(data: CreateCartItemDto): Promise<void>;
    findAll(): Promise<cartItem[]>;
    findOne(id: string): Promise<cartItem>;
    update(id: string, updateCartItemDto: UpdateCartItemDto): Promise<cartItem>;
    remove(id: string): Promise<cartItem>;
}
