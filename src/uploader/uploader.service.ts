import { Injectable } from '@nestjs/common';
import { prisma } from 'src/dbConfig/db';

@Injectable()
export class UploaderService {
  async uploadAttachment(data: any) {
    try {
      const upload: any = await prisma.attachment.create({
        data,
      });
      if (upload) return upload;
    } catch (error) {}
  }
  async getAllAttchaments() {
    const attachments = await prisma.attachment.findMany();
    return attachments;
  }
}
