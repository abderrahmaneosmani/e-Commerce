import { Injectable } from '@nestjs/common';
import { prisma } from '../dbConfig/db';
import { Role } from '.prisma/client';


@Injectable()
export class RolesService {

    async create (role:Role){
      const record  =await  prisma.role.create({data:role})
    }

    async findAll() {
      return await prisma.role.findMany() ;
    }
  
    async findOne(id: string) {
      return await prisma.role.findUnique({where:{id}}) ;
  
    }
  
    async remove(id: string) {
      return await prisma.role.delete({where:{id}})
    }
    
}
