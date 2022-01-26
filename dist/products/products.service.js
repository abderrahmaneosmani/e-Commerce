"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const db_1 = require("../dbConfig/db");
let ProductsService = class ProductsService {
    async create(createProductDto) {
        const product = await db_1.prisma.product.create({ data: createProductDto });
        return product;
    }
    async findAll() {
        return await db_1.prisma.product.findMany({ where: { status: 'active' } });
    }
    async findOne(id) {
        return await db_1.prisma.product.findFirst({ where: { id, status: 'active' } });
    }
    async update(id, updateUserDto) {
        return await db_1.prisma.product.update({ where: { id }, data: updateUserDto });
    }
    async remove(id) {
        return await db_1.prisma.product.update({
            where: { id },
            data: { status: 'delete' },
        });
    }
    async findByCategoryId(categoryId) {
        const product = await db_1.prisma.product.findMany({
            where: {
                categoryId: categoryId,
            },
        });
        return product;
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map