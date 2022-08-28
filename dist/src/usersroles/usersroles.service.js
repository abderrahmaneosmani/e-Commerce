"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersrolesService = void 0;
const common_1 = require("@nestjs/common");
const db_1 = require("../dbConfig/db");
let UsersrolesService = class UsersrolesService {
    async create(userRole) {
        const userrole = await db_1.prisma.userRole.create({ data: userRole });
        if (!userrole) {
            throw new common_1.HttpException(`cant create  .... `, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        return userrole;
    }
    async remove(id) {
        const userrole = await db_1.prisma.userRole.delete({ where: { id } });
        if (!userrole) {
            throw new common_1.HttpException(`not found this .... ${id}`, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        return userrole;
    }
};
UsersrolesService = __decorate([
    (0, common_1.Injectable)()
], UsersrolesService);
exports.UsersrolesService = UsersrolesService;
//# sourceMappingURL=usersroles.service.js.map