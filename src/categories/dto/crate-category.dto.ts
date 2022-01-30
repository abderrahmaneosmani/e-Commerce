import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly desc: string;
  @IsString()
  readonly url: string;
}
