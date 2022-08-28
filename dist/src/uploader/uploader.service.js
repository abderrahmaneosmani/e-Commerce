"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploaderService = void 0;
const common_1 = require("@nestjs/common");
const db_1 = require("../dbConfig/db");
let UploaderService = class UploaderService {
    async uploadAttachment(data) {
        try {
            const upload = await db_1.prisma.attachment.create({
                data,
            });
            if (upload)
                return upload;
        }
        catch (error) { }
    }
    async getAllAttchaments() {
        const attachments = await db_1.prisma.attachment.findMany();
        return attachments;
    }
};
UploaderService = __decorate([
    (0, common_1.Injectable)()
], UploaderService);
exports.UploaderService = UploaderService;
//# sourceMappingURL=uploader.service.js.map