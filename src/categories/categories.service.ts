import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { prisma } from '../dbConfig/db';
import { CreateCategoryDto } from './dto/crate-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  async create(createCategoryDto: CreateCategoryDto) {
    const category = await prisma.category.create({ data: createCategoryDto });
    if (!category) {
      throw new HttpException(
        `we can create this category`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return category;
  }

  async findAll() {
    const categories = await prisma.category.findMany({
      where: { status: 'active' },
    });
    if (!categories) {
      throw new HttpException(`not found  .... `, HttpStatus.NOT_FOUND);
    }

    return categories;
  }

  async findOne(id: string) {
    const category = await prisma.category.findFirst({
      where: { id, status: 'active' },
    });
    if (!category) {
      throw new HttpException(
        `not found this .... ${id}`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = await prisma.user.update({
      where: { id },
      data: updateCategoryDto,
    });
    if (!category) {
      throw new HttpException(
        `not found this .... ${id}`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return category;
  }

  async remove(id: string) {
    const category = await prisma.category.update({
      where: { id },
      data: { status: 'delete' },
    });
    if (category) {
      throw new HttpException(
        `not found this .... ${id}`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return category;
  }
  async findByTitle(title: string) {
    const category = await prisma.category.findMany({
      where: {
        title,
      },
    });
    if (!category) {
      throw new HttpException(
        `not found this .... ${name}`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return category;
  }
}
