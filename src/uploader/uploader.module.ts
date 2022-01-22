import { Module } from '@nestjs/common';
import { UploaderController } from './uploader.controller';
import { MulterModule } from '@nestjs/platform-express';
import { UploaderService } from './uploader.service';

@Module({
  imports: [
    MulterModule.register({
      dest: 'src/uploads/',
    }),
  ],
  controllers: [UploaderController],
  providers: [UploaderService],
})
export class UploaderModule {}
