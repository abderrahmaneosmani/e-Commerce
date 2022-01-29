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
import { CartItemService } from './cartitems.service';
import { CreateCartItemDto } from './dto/create-cartItem.dto';
import { UpdateCartItemDto } from './dto/update-cartItem';
@Controller('cartitems')
export class CartitemsController {
  constructor(private readonly cartItemService: CartItemService) {}
  @Post()
  create(@Body() createCarteDto: CreateCartItemDto) {
    return this.cartItemService.create(createCarteDto);
  }
  @Get()
  findAll() {
    return this.cartItemService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartItemService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartIemDto: UpdateCartItemDto) {
    return this.cartItemService.update(id, updateCartIemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const cart = this.cartItemService.remove(id);
    if (!cart) {
      throw new NotFoundException();
    }
  }
}
