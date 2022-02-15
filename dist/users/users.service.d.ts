import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    create(createUserDto: CreateUserDto): Promise<import(".prisma/client").User>;
    findAll(): Promise<import(".prisma/client").User[]>;
    findOne(id: string): Promise<import(".prisma/client").User>;
    findByName(username: string): Promise<import(".prisma/client").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import(".prisma/client").User>;
    remove(id: string): Promise<import(".prisma/client").User>;
}
