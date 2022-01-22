"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploaderController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const file_uploading_utils_1 = require("../utils/file-uploading-utils");
const uploader_service_1 = require("./uploader.service");
let UploaderController = class UploaderController {
    constructor(uploaderService) {
        this.uploaderService = uploaderService;
    }
    async uploadedFile(file) {
        const response = {
            originalname: file.originalname,
            filename: file.filename,
            type: 'prodcut',
            desc: 'for prodcut',
        };
        await this.uploaderService.uploadAttachment(response);
        return response;
    }
    seeUploadedFile(image, res) {
        return res.sendFile(image, { root: 'src/uploads' });
    }
    seeAllAttachments() {
        const attachments = this.uploaderService.getAllAttchaments();
        return attachments;
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: 'src/uploads/',
            filename: file_uploading_utils_1.editFileName,
        }),
        fileFilter: file_uploading_utils_1.imageFileFilter,
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploaderController.prototype, "uploadedFile", null);
__decorate([
    (0, common_1.Get)(':imgpath'),
    __param(0, (0, common_1.Param)('imgpath')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UploaderController.prototype, "seeUploadedFile", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UploaderController.prototype, "seeAllAttachments", null);
UploaderController = __decorate([
    (0, common_1.Controller)('uploader'),
    __metadata("design:paramtypes", [uploader_service_1.UploaderService])
], UploaderController);
exports.UploaderController = UploaderController;
//# sourceMappingURL=uploader.controller.js.map