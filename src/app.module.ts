import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { UsersrolesModule } from './usersroles/usersroles.module';

@Module({
  imports: [UsersModule,RolesModule, UsersrolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
