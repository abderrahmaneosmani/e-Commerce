import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

const secret = 'kdkkdkkd737663728'


@Module({
  imports:[UsersModule,PassportModule,JwtModule.register({secret,signOptions:{expiresIn:'60s'}})],
  providers: [AuthService,LocalStrategy],
  exports: [AuthService],


})  

export class AuthModule {}
