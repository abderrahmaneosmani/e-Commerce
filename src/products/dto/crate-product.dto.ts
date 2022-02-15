import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly title: string;
  @IsString()
  readonly description: string;
  @IsString()
  readonly image: string;
  @IsNumber()
  readonly price: number;
  @IsString()
  readonly categoryId: string;
  @IsString()
  readonly rating?: string;
}
