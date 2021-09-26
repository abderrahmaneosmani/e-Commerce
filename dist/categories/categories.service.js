"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const db_1 = require("../dbConfig/db");
let CategoriesService = class CategoriesService {
    async create(createCategoryDto) {
        const category = await db_1.prisma.category.create({ data: createCategoryDto });
        return category;
    }
    async findAll() {
        return await db_1.prisma.category.findMany({ where: { status: "active" } });
    }
    async findOne(id) {
        return await db_1.prisma.category.findFirst({ where: { id, status: "active" } });
    }
    async update(id, updateCategoryDto) {
        return await db_1.prisma.user.update({ where: { id }, data: updateCategoryDto });
    }
    async remove(id) {
        return await db_1.prisma.category.update({ where: { id }, data: { status: "delete" } });
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)()
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map