import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly username: string;
  @IsString()
  password: string;
  @IsString()
  readonly email: string;
  @IsString()
  readonly firstname: string;
  @IsString()
  readonly lastname: string;
  @IsString()
  readonly roleId?: string;
}
