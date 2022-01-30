import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { prisma } from '../dbConfig/db';
import { userRole } from '.prisma/client';

@Injectable()
export class UsersrolesService {
  async create(userRole: any) {
    const userrole = await prisma.userRole.create({ data: userRole });
    if (!userrole) {
      throw new HttpException(`cant create  .... `, HttpStatus.NOT_ACCEPTABLE);
    }
    return userrole;
  }

  async remove(id: string) {
    const userrole = await prisma.userRole.delete({ where: { id } });
    if (!userrole) {
      throw new HttpException(
        `not found this .... ${id}`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return userrole;
  }
}
