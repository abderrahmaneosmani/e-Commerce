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
        if (!category) {
            throw new common_1.HttpException(`we can create this category`, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        return category;
    }
    async findAll() {
        const categories = await db_1.prisma.category.findMany({
            where: { status: 'active' },
        });
        if (!categories) {
            throw new common_1.HttpException(`not found  .... `, common_1.HttpStatus.NOT_FOUND);
        }
        return categories;
    }
    async findOne(id) {
        const category = await db_1.prisma.category.findFirst({
            where: { id, status: 'active' },
        });
        if (!category) {
            throw new common_1.HttpException(`not found this .... ${id}`, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        return category;
    }
    async update(id, updateCategoryDto) {
        const category = await db_1.prisma.user.update({
            where: { id },
            data: updateCategoryDto,
        });
        if (!category) {
            throw new common_1.HttpException(`not found this .... ${id}`, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        return category;
    }
    async remove(id) {
        const category = await db_1.prisma.category.update({
            where: { id },
            data: { status: 'delete' },
        });
        if (category) {
            throw new common_1.HttpException(`not found this .... ${id}`, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        return category;
    }
    async findByTitle(title) {
        const category = await db_1.prisma.category.findMany({
            where: {
                title,
            },
        });
        if (!category) {
            throw new common_1.HttpException(`not found this .... ${name}`, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        return category;
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)()
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map