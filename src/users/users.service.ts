import { Injectable } from '@nestjs/common';
import { prisma } from '../dbConfig/db';
import { User } from '.prisma/client';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  async create(createUserDto: User) {
   //hash password 
    const saltOrRounds:number= 10;
    let password:string= createUserDto.password;
    const hash :string= await bcrypt.hash(password, saltOrRounds);
    createUserDto.password =hash
    //create user
    const user =await prisma.user.create({data:createUserDto}) ;
    return user
    
  }

  async findAll() {
    return await prisma.user.findMany({where:{status:"active"}}) ;
  }

  async findOne(id: string) {
    return await prisma.user.findFirst({where:{id,status:"active"}}) ;

  }

  async update(id: string, updateUserDto: User) {
    return await prisma.user.update({where:{id},data:updateUserDto});
  }

  async remove(id: string) {
    return await prisma.user.update({where:{id},data:{status:"delete"}})
  }
}
