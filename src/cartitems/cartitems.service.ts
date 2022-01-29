import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { prisma } from '../dbConfig/db';
import { cartItem } from '.prisma/client';
import { CreateCartItemDto } from './dto/create-cartItem.dto';
import { UpdateCartItemDto } from './dto/update-cartItem';

@Injectable()
export class CartItemService {
  async create(data: CreateCartItemDto) {
    const cartItem = await prisma.cartItem.create({ data });
    if (!cartItem) {
      throw new HttpException('error ', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    const cartItem = await prisma.cartItem.findMany({
      where: { status: 'active' },
    });
    if (!cartItem) {
      throw new HttpException('error', HttpStatus.NOT_FOUND);
    }
    return cartItem;
  }

  async findOne(id: string) {
    const cartItem = await prisma.cartItem.findFirst({
      where: { id, status: 'active' },
    });
    if (!cartItem) {
      throw new HttpException(
        `not found this .... ${id}`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return cartItem;
  }

  async update(id: string, updateCartItemDto: UpdateCartItemDto) {
    const cartItem = await prisma.cartItem.update({
      where: { id },
      data: updateCartItemDto,
    });
    if (!cartItem) {
      throw new HttpException(
        `not found this .... ${id}`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return cartItem;
  }

  async remove(id: string) {
    const cartItem = await prisma.cartItem.update({
      where: { id },
      data: { status: 'delete' },
    });
    if (!cartItem) {
      throw new HttpException(
        `not found this .... ${id}`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return cartItem;
  }
}
