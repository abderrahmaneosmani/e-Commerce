import { RolesService } from './roles.service';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    create(createRoleDto: any): void;
    findAll(): Promise<import(".prisma/client").Role[]>;
    findOne(id: string): void;
    remove(id: string): void;
}
