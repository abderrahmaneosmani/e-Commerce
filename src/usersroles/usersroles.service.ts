import { Injectable } from '@nestjs/common';
import { prisma } from '../dbConfig/db';
import { userRole } from '.prisma/client';

@Injectable()
export class UsersrolesService {
 async create(userRole: userRole) {
    return  await prisma.userRole.create({data:userRole})
  }

  async remove(id: string) {
    return await prisma.userRole.delete({where:{id}})
  }
}
