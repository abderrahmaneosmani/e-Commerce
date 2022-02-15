import { userRole } from '.prisma/client';
export declare class UsersrolesService {
    create(userRole: any): Promise<userRole>;
    remove(id: string): Promise<userRole>;
}
