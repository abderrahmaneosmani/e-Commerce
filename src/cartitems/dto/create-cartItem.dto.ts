import { IsOptional, IsString } from 'class-validator';
export class CreateCartItemDto {
  @IsString()
  readonly productId: string;
  @IsOptional()
  readonly userId?: string;
  @IsString()
  readonly totalPrice: string;
  @IsString()
  readonly image: string;
}
