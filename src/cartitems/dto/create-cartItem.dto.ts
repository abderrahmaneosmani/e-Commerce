import { IsNumber, IsString } from 'class-validator';
export class CreateCartItemDto {
  @IsString()
  readonly productId: string;
  @IsNumber()
  readonly quantity: number;
  @IsString()
  readonly url: string;
  @IsString()
  readonly totalPrice: string;
}
