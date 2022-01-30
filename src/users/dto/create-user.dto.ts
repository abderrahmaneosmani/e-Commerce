import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './update-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
