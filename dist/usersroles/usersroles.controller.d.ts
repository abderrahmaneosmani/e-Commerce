import { UsersrolesService } from './usersroles.service';
export declare class UsersrolesController {
    private readonly usersrolesService;
    constructor(usersrolesService: UsersrolesService);
    create(createUsersroleDto: any): Promise<import(".prisma/client").userRole>;
    remove(id: string): Promise<import(".prisma/client").userRole>;
}
