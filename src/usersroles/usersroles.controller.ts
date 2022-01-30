import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserRoleDto } from './dto/create-user-role-dto';
import { UsersrolesService } from './usersroles.service';

@Controller('usersroles')
export class UsersrolesController {
  constructor(private readonly usersrolesService: UsersrolesService) {}

  @Post()
  create(@Body() createUsersroleDto: CreateUserRoleDto) {
    return this.usersrolesService.create(createUsersroleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersrolesService.remove(id);
  }
}
