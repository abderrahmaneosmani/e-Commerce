"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const db_1 = require("../dbConfig/db");
let RolesService = class RolesService {
    async create(role) {
        const record = await db_1.prisma.role.create({ data: role });
    }
    async findAll() {
        return await db_1.prisma.role.findMany();
    }
    async findOne(id) {
        return await db_1.prisma.role.findUnique({ where: { id } });
    }
    async remove(id) {
        return await db_1.prisma.role.delete({ where: { id } });
    }
};
RolesService = __decorate([
    (0, common_1.Injectable)()
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map