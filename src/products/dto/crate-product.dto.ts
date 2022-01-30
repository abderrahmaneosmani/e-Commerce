import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly desc: string;
  @IsString()
  readonly url: string;
  @IsNumber()
  readonly price: number;
  @IsString()
  readonly categoryId: string;
}
