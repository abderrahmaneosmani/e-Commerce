import { Public } from './../utils/public.decorator';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CreateProductDto } from './dto/crate-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Public()
  @Get()
  findAll(@Query('s') s: string) {
    return this.productsService.findAll(s);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }
  @Public()
  @Get()
  findByName(@Query('categoryId') categoryId: string): any {
    return this.productsService.findByCategoryId(categoryId);
  }

  @Public()
  @Get('sort')
  sortProduct(@Query('sort') sort: string): any {
    return this.productsService.sortProducts(sort);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
