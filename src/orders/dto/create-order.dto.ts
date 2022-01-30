import { IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  readonly userId: string;
  @IsNumber()
  readonly amount: number;
}
