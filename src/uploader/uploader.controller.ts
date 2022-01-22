import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from 'src/utils/file-uploading-utils';
import { UploaderService } from './uploader.service';

@Controller('uploader')
export class UploaderController {
  constructor(private readonly uploaderService: UploaderService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: 'src/uploads/',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadedFile(@UploadedFile() file) {
    const response: any = {
      originalname: file.originalname,
      filename: file.filename,
      type: 'prodcut',
      desc: 'for prodcut',
    };
    await this.uploaderService.uploadAttachment(response);
    return response;
  }

  @Get(':imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: 'src/uploads' });
  }
  @Get()
  seeAllAttachments() {
    const attachments: any = this.uploaderService.getAllAttchaments();
    return attachments;
  }
}
