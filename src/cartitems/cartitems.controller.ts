import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CartitemsService } from './cartitems.service';

@Controller('cartitems')
export class CartitemsController {
  constructor(private readonly cartitemsService: CartitemsService) {}

  @Post()
  create(@Body() createUserDto: any) {
    const cart = this.cartitemsService.create(createUserDto);
    if (!cart) {
      throw new NotFoundException();
    }
  }

  @Get()
  findAll() {
    const cart = this.cartitemsService.findAll();
    if (!cart) {
      throw new NotFoundException();
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const cart = this.cartitemsService.findOne(id);
    if (!cart) {
      throw new NotFoundException();
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    const cart = this.cartitemsService.update(id, updateUserDto);
    if (!cart) {
      throw new NotFoundException();
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const cart = this.cartitemsService.remove(id);
    if (!cart) {
      throw new NotFoundException();
    }
  }
}
