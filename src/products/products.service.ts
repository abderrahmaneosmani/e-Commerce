import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { prisma } from '../dbConfig/db';
import { CreateProductDto } from './dto/crate-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
@Injectable()
export class ProductsService {
  async create(createProductDto: any) {
    const product = await prisma.product.create({ data: createProductDto });
    if (!product) {
      throw new HttpException(
        `we can create this product`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return product;
  }

  async findAll(s: string) {
    const params: any = {
      status: 'active',
    };
    if (s && typeof s === 'string' && s.length > 0) {
      params.OR = [
        {
          title: {
            contains: s,
            mode: 'insensitive',
          },
          description: {
            contains: s,
            mode: 'insensitive',
          },
        },
      ];
    }

    const products = await prisma.product.findMany({
      where: params,
    });
    if (!products) {
      throw new HttpException(`not found`, HttpStatus.NOT_FOUND);
    }
    return products;
  }

  async findOne(id: string) {
    const product = await prisma.product.findFirst({
      where: { id, status: 'active' },
    });
    if (!product) {
      throw new HttpException(
        `not found this .... ${id}`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
    if (!product) {
      throw new HttpException(
        `not found this .... ${id}`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return product;
  }

  async remove(id: string) {
    const product = await prisma.product.update({
      where: { id },
      data: { status: 'delete' },
    });
    if (!product) {
      throw new HttpException(
        `not found this .... ${id}`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return product;
  }
  async findByCategoryId(categoryId: string) {
    const product = await prisma.product.findMany({
      where: {
        categoryId,
        status: 'active',
      },
    });
    if (!product) {
      throw new HttpException(
        `not found this .... ${categoryId}`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return product;
  }
  async sortProducts(sort: string) {
    const sorts: any = {
      createdAt: 'desc',
    };
    if (sort) {
      delete sorts.createdAt;
      sorts[sort] = 'desc';
    }

    const products = await prisma.product.findMany({
      where: {
        status: 'active',
      },
      orderBy: sorts,
    });
    if (!products) {
      throw new HttpException(
        `not found this .... ${sort}`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return products;
  }
}
