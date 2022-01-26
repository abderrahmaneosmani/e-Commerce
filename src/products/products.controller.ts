import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { Public } from 'src/utils/public.decorator';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: any) {
    const product = this.productsService.create(createProductDto);
  }

  @Public()
  @Get()
  findByName(@Query('categoryId') categoryId: string): any {
    const product = this.productsService.findByCategoryId(categoryId);
    if (!product) {
      throw new NotFoundException();
    }
  }
  @Get()
  findAll() {
    const product = this.productsService.findAll();
    if (!product) {
      throw new NotFoundException();
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const product = this.productsService.findOne(id);
    if (!product) {
      throw new NotFoundException();
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: any) {
    const product = this.productsService.update(id, updateProductDto);
    if (!product) {
      throw new NotFoundException();
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const prdouct = this.productsService.remove(id);
    if (!prdouct) {
      throw new NotFoundException();
    }
  }
}
