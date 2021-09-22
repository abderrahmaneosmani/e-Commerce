import { User } from '.prisma/client';
export declare class UsersService {
    create(createUserDto: User): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: User): Promise<User>;
    remove(id: string): Promise<User>;
}
