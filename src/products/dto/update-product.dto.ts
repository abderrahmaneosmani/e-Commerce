import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './crate-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {}
