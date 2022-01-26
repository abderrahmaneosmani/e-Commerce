import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @Post()
  create(@Body() createOrderDto: any) {
    const order = this.ordersService.create(createOrderDto);
    if (!order) {
      throw new NotFoundException();
    }
  }

  @Get()
  findAll() {
    const order = this.ordersService.findAll();
    if (!order) {
      throw new NotFoundException();
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const order = this.ordersService.findOne(id);
    if (!order) {
      throw new NotFoundException();
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: any) {
    const order = this.ordersService.update(id, updateOrderDto);
    if (!order) {
      throw new NotFoundException();
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const order = this.ordersService.remove(id);
    if (!order) {
      throw new NotFoundException();
    }
  }
}
