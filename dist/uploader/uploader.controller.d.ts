import { UploaderService } from './uploader.service';
export declare class UploaderController {
    private readonly uploaderService;
    constructor(uploaderService: UploaderService);
    uploadedFile(file: any): Promise<any>;
    seeUploadedFile(image: any, res: any): void;
    seeAllAttachments(): void;
}
