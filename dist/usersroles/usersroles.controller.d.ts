import { CreateUserRoleDto } from './dto/create-user-role-dto';
import { UsersrolesService } from './usersroles.service';
export declare class UsersrolesController {
    private readonly usersrolesService;
    constructor(usersrolesService: UsersrolesService);
    create(createUsersroleDto: CreateUserRoleDto): Promise<import(".prisma/client").userRole>;
    remove(id: string): Promise<import(".prisma/client").userRole>;
}
