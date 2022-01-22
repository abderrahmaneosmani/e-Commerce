import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const reflector: any = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector));
  await app.listen(9000);
}
bootstrap();
