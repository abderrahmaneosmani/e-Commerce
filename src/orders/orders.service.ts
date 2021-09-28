import { Injectable } from '@nestjs/common';
import { prisma } from '../dbConfig/db';
import { Order } from '.prisma/client';

@Injectable()
export class OrdersService {

    async create(createProductDto: Order) {
        const order =await prisma.order.create({data:createProductDto}) ;
        return order
      }
    
      async findAll() {
        return await prisma.order.findMany({where:{status:"active"}}) ;
      }
    
      async findOne(id: string) {
        return await prisma.order.findFirst({where:{id,status:"active"}}) ;
    
      }
    
      async update(id: string, updateUserDto: Order) {
        return await prisma.order.update({where:{id},data:updateUserDto});
      }
    
      async remove(id: string) {
        return await prisma.order.update({where:{id},data:{status:"delete"}})
      }
    
}
