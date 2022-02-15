import { IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly username: string;
  @IsString()
  password: string;
  @IsString()
  readonly email: string;
  @IsOptional()
  readonly firstname: string;
  @IsOptional()
  readonly lastname: string;
  @IsOptional()
  @IsString()
  readonly roleId?: string;
}
