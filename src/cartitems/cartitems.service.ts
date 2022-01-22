import { Injectable } from '@nestjs/common';
import { prisma } from '../dbConfig/db';
import { cartItem } from '.prisma/client';

@Injectable()
export class CartitemsService {
  async create(createCartItemDto: cartItem) {
    const cartItem = await prisma.cartItem.create({ data: createCartItemDto });
    return cartItem;
  }

  async findAll() {
    return await prisma.cartItem.findMany({ where: { status: 'active' } });
  }

  async findOne(id: string) {
    return await prisma.cartItem.findFirst({ where: { id, status: 'active' } });
  }

  async update(id: string, updateUserDto: cartItem) {
    return await prisma.cartItem.update({ where: { id }, data: updateUserDto });
  }

  async remove(id: string) {
    return await prisma.cartItem.update({
      where: { id },
      data: { status: 'delete' },
    });
  }
}
