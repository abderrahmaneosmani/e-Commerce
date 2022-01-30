import { IsString } from 'class-validator';
export class CreateUserRoleDto {
  @IsString()
  readonly userId: string;
  @IsString()
  readonly roleId: string;
}
