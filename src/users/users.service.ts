import { UpdateUserDto } from './dto/update-user.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { prisma } from '../dbConfig/db';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    //hash password
    const saltOrRounds = 10;
    const password: string = createUserDto.password;
    const hash: string = await bcrypt.hash(password, saltOrRounds);
    createUserDto.password = hash;
    //create user
    const user = await prisma.user.create({ data: createUserDto });
    return user;
  }

  async findAll() {
    const user = await prisma.user.findMany({ where: { status: 'active' } });
    if (!user) {
      throw new HttpException(`not found`, HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async findOne(id: string) {
    const user = await prisma.user.findFirst({
      where: { id, status: 'active' },
    });
    if (!user) {
      throw new HttpException(
        `not found this .... ${id}`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return user;
  }

  async findByName(username: string) {
    const user = await prisma.user.findFirst({
      where: { username, status: 'active' },
    });
    if (!user) {
      throw new HttpException(
        `not found this .... ${username}`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
    if (!user) {
      throw new HttpException(
        `we can create this product`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return user;
  }

  async remove(id: string) {
    const user = await prisma.user.update({
      where: { id },
      data: { status: 'delete' },
    });
    if (!user) {
      throw new HttpException(
        `not found this .... ${id}`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return user;
  }
}
