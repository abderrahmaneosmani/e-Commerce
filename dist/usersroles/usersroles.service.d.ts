import { userRole } from '.prisma/client';
export declare class UsersrolesService {
    create(userRole: userRole): Promise<userRole>;
    remove(id: string): Promise<userRole>;
}
