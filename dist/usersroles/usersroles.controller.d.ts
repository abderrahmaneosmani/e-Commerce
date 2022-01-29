import { UsersrolesService } from './usersroles.service';
export declare class UsersrolesController {
    private readonly usersrolesService;
    constructor(usersrolesService: UsersrolesService);
    create(createUsersroleDto: any): void;
    remove(id: string): void;
}
