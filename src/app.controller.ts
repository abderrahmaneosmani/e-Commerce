import { Controller, Post, UseGuards, Request, Bind } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local.auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { Public } from './utils/public.decorator';

@UseGuards(JwtAuthGuard)
@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @Bind(Request())
  async login(req): Promise<any> {
    return this.authService.login(req.user);
  }
}
