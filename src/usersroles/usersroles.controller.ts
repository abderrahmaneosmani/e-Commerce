import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersrolesService } from './usersroles.service';

@Controller('usersroles')
export class UsersrolesController {
  constructor(private readonly usersrolesService: UsersrolesService) {}

  @Post()
  create(@Body() createUsersroleDto: any) {
    return this.usersrolesService.create(createUsersroleDto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersrolesService.remove(id);
  }
}
