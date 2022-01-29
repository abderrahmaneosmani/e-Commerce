import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: any): void;
    findAll(): void;
    findOne(id: string): void;
    update(id: string, updateUserDto: any): void;
    remove(id: string): void;
}
