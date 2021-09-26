import { RolesService } from './roles.service';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    create(createUserDto: any): Promise<void>;
    findAll(): Promise<import(".prisma/client").Role[]>;
    findOne(id: string): Promise<import(".prisma/client").Role>;
    remove(id: string): Promise<import(".prisma/client").Role>;
}
