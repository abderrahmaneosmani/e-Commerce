"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const db_1 = require("../dbConfig/db");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    async create(createUserDto) {
        const saltOrRounds = 10;
        const password = createUserDto.password;
        const hash = await bcrypt.hash(password, saltOrRounds);
        createUserDto.password = hash;
        const user = await db_1.prisma.user.create({ data: createUserDto });
        return user;
    }
    async findAll() {
        return await db_1.prisma.user.findMany({ where: { status: 'active' } });
    }
    async findOne(id) {
        return await db_1.prisma.user.findFirst({ where: { id, status: 'active' } });
    }
    async findByName(username) {
        return await db_1.prisma.user.findFirst({
            where: { username, status: 'active' },
        });
    }
    async update(id, updateUserDto) {
        return await db_1.prisma.user.update({ where: { id }, data: updateUserDto });
    }
    async remove(id) {
        return await db_1.prisma.user.update({
            where: { id },
            data: { status: 'delete' },
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map