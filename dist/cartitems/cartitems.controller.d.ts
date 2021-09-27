import { CartitemsService } from './cartitems.service';
export declare class CartitemsController {
    private readonly cartitemsService;
    constructor(cartitemsService: CartitemsService);
    create(createUserDto: any): Promise<import(".prisma/client").cartItem>;
    findAll(): Promise<import(".prisma/client").cartItem[]>;
    findOne(id: string): Promise<import(".prisma/client").cartItem>;
    update(id: string, updateUserDto: any): Promise<import(".prisma/client").cartItem>;
    remove(id: string): Promise<import(".prisma/client").cartItem>;
}
