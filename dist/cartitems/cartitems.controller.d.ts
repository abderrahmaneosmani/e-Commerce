import { CartItemService } from './cartitems.service';
import { CreateCartItemDto } from './dto/create-cartItem.dto';
import { UpdateCartItemDto } from './dto/update-cartItem';
export declare class CartitemsController {
    private readonly cartItemService;
    constructor(cartItemService: CartItemService);
    create(createCarteDto: CreateCartItemDto): Promise<void>;
    findAll(): Promise<import(".prisma/client").cartItem[]>;
    findOne(id: string): Promise<import(".prisma/client").cartItem>;
    update(id: string, updateCartIemDto: UpdateCartItemDto): Promise<import(".prisma/client").cartItem>;
    remove(id: string): void;
}
