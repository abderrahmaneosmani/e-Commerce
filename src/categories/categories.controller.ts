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
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}
  @Post()
  create(@Body() createCategoryDto: any) {
    const category = this.categoriesService.create(createCategoryDto);
    if (!category) {
      throw new NotFoundException();
    }
  }
  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get()
  findByName(@Query('name') name: string): any {
    const category = this.categoriesService.findByName(name);
    if (!category) {
      throw new NotFoundException();
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const category = this.categoriesService.findOne(id);
    if (!category) {
      throw new NotFoundException();
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: any) {
    const category = this.categoriesService.update(id, updateCategoryDto);
    if (!category) {
      throw new NotFoundException();
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const category = this.categoriesService.remove(id);
    if (!category) {
      throw new NotFoundException();
    }
  }
}
