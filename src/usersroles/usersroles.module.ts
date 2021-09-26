import { Module } from '@nestjs/common';
import { UsersrolesService } from './usersroles.service';
import { UsersrolesController } from './usersroles.controller';

@Module({
  controllers: [UsersrolesController],
  providers: [UsersrolesService]
})
export class UsersrolesModule {}
