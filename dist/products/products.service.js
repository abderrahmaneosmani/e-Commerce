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
        if (!product) {
            throw new common_1.HttpException(`we can create this product`, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        return product;
    }
    async findAll() {
        const products = await db_1.prisma.product.findMany({
            where: { status: 'active' },
        });
        if (!products) {
            throw new common_1.HttpException(`not found`, common_1.HttpStatus.NOT_FOUND);
        }
        return products;
    }
    async findOne(id) {
        const product = await db_1.prisma.product.findFirst({
            where: { id, status: 'active' },
        });
        if (!product) {
            throw new common_1.HttpException(`not found this .... ${id}`, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
    }
    async update(id, updateProductDto) {
        const product = await db_1.prisma.product.update({
            where: { id },
            data: updateProductDto,
        });
        if (!product) {
            throw new common_1.HttpException(`not found this .... ${id}`, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        return product;
    }
    async remove(id) {
        const product = await db_1.prisma.product.update({
            where: { id },
            data: { status: 'delete' },
        });
        if (!product) {
            throw new common_1.HttpException(`not found this .... ${id}`, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        return product;
    }
    async findByCategoryId(categoryId) {
        const product = await db_1.prisma.product.findMany({
            where: {
                categoryId: categoryId,
            },
        });
        if (!product) {
            throw new common_1.HttpException(`not found this .... ${categoryId}`, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        return product;
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map