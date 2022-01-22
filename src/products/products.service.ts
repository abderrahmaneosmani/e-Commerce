import { Injectable } from '@nestjs/common';
import { prisma } from '../dbConfig/db';
import { Product } from '.prisma/client';
@Injectable()
export class ProductsService {
  
       async create(createProductDto: Product) {
         const product =await prisma.product.create({data:createProductDto}) ;
         return product
       }
     
       async findAll() {
         return await prisma.product.findMany({where:{status:"active"}}) ;
       }
     
       async findOne(id: string) {
         return await prisma.product.findFirst({where:{id,status:"active"}}) ;
     
       }
     
       async update(id: string, updateUserDto: Product) {
         return await prisma.product.update({where:{id},data:updateUserDto});
       }
     
       async remove(id: string) {
         return await prisma.product.update({where:{id},data:{status:"delete"}})
       }
}



