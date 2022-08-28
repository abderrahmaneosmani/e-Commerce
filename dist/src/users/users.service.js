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
        const user = await db_1.prisma.user.findMany({ where: { status: 'active' } });
        if (!user) {
            throw new common_1.HttpException(`not found`, common_1.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    async findOne(id) {
        const user = await db_1.prisma.user.findFirst({
            where: { id, status: 'active' },
        });
        if (!user) {
            throw new common_1.HttpException(`not found this .... ${id}`, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        return user;
    }
    async findByName(username) {
        const user = await db_1.prisma.user.findFirst({
            where: { username, status: 'active' },
        });
        if (!user) {
            throw new common_1.HttpException(`not found this .... ${username}`, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        return user;
    }
    async update(id, updateUserDto) {
        const user = await db_1.prisma.user.update({
            where: { id },
            data: updateUserDto,
        });
        if (!user) {
            throw new common_1.HttpException(`we can create this product`, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        return user;
    }
    async remove(id) {
        const user = await db_1.prisma.user.update({
            where: { id },
            data: { status: 'delete' },
        });
        if (!user) {
            throw new common_1.HttpException(`not found this .... ${id}`, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        return user;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map