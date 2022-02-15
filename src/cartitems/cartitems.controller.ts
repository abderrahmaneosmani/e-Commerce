import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { query } from 'express';
import { Public } from 'src/utils/public.decorator';
import { CartItemService } from './cartitems.service';
import { CreateCartItemDto } from './dto/create-cartItem.dto';
import { UpdateCartItemDto } from './dto/update-cartItem';
@Controller('cartitems')
export class CartitemsController {
  constructor(private readonly cartItemService: CartItemService) {}
  @Public()
  @Post()
  create(@Body() createCarteDto: CreateCartItemDto) {
    return this.cartItemService.create(createCarteDto);
  }
  @Public()
  @Get()
  getByUserId(@Query() query: any) {
    return this.cartItemService.getByUserId(query.userId);
  }
  @Public()
  @Get()
  findAll() {
    return this.cartItemService.findAll();
  }
  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartItemService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartIemDto: UpdateCartItemDto) {
    return this.cartItemService.update(id, updateCartIemDto);
  }
  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartItemService.remove(id);
  }
}
