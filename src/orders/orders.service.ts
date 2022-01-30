import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { prisma } from '../dbConfig/db';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  async create(createProductDto: CreateOrderDto) {
    const order = await prisma.order.create({ data: createProductDto });
    if (!order) {
      throw new HttpException(
        `we can create this order`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return order;
  }

  async findAll() {
    const orders = await prisma.order.findMany({ where: { status: 'active' } });
    if (!orders) {
      throw new HttpException(`not found`, HttpStatus.NOT_FOUND);
    }
    return orders;
  }

  async findOne(id: string) {
    const order = await prisma.order.findFirst({
      where: { id, status: 'active' },
    });
    if (!order) {
      throw new HttpException(
        `not found this ${id}`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return order;
  }

  async update(id: string, updateUserDto: UpdateOrderDto) {
    const order = await prisma.order.update({
      where: { id },
      data: updateUserDto,
    });
    if (!order) {
      throw new HttpException(
        `not found this .... ${id}`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return order;
  }

  async remove(id: string) {
    const order = await prisma.order.update({
      where: { id },
      data: { status: 'delete' },
    });
    if (!order) {
      throw new HttpException(
        `not found this .... ${id}`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return order;
  }
}
