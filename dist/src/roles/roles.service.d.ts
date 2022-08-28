import { Role } from '.prisma/client';
export declare class RolesService {
    create(role: Role): Promise<void>;
    findAll(): Promise<Role[]>;
    findOne(id: string): Promise<Role>;
    remove(id: string): Promise<Role>;
}
