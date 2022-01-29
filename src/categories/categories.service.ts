import { Injectable } from '@nestjs/common';
import { prisma } from '../dbConfig/db';
import { Category } from '.prisma/client';

@Injectable()
export class CategoriesService {
  async create(createCategoryDto: Category) {
    const category = await prisma.category.create({ data: createCategoryDto });
    return category;
  }

  async findAll() {
    const categories = await prisma.category.findMany({
      where: { status: 'active' },
    });

    console.log(categories);
    return categories;
  }

  async findOne(id: string) {
    return await prisma.category.findFirst({ where: { id, status: 'active' } });
  }

  async update(id: string, updateCategoryDto: Category) {
    return await prisma.user.update({ where: { id }, data: updateCategoryDto });
  }

  async remove(id: string) {
    return await prisma.category.update({
      where: { id },
      data: { status: 'delete' },
    });
  }
  async findByName(name: string) {
    const category = await prisma.category.findMany({
      where: {
        name,
      },
    });
    return category;
  }
}
