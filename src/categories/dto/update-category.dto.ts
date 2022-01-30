import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './crate-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
