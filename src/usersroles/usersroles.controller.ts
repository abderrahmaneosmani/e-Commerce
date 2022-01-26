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
import { UsersrolesService } from './usersroles.service';

@Controller('usersroles')
export class UsersrolesController {
  constructor(private readonly usersrolesService: UsersrolesService) {}

  @Post()
  create(@Body() createUsersroleDto: any) {
    const userRole = this.usersrolesService.create(createUsersroleDto);
    if (!userRole) {
      throw new NotFoundException();
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const userRole = this.usersrolesService.remove(id);
    if (!userRole) {
      throw new NotFoundException();
    }
  }
}
