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
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  create(@Body() createRoleDto: any) {
    const role = this.rolesService.create(createRoleDto);
    if (!role) {
      throw new NotFoundException();
    }
  }

  @Get()
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const role = this.rolesService.findOne(id);
    if (!role) {
      throw new NotFoundException();
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const role = this.rolesService.remove(id);
    if (!role) {
      throw new NotFoundException();
    }
  }
}
