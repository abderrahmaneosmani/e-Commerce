"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItemService = void 0;
const common_1 = require("@nestjs/common");
const db_1 = require("../dbConfig/db");
let CartItemService = class CartItemService {
    async create(data) {
        const cartItem = await db_1.prisma.cartItem.create({ data });
        if (!cartItem) {
            throw new common_1.HttpException('error ', common_1.HttpStatus.BAD_REQUEST);
        }
        return cartItem;
    }
    async findAll() {
        const cartItem = await db_1.prisma.cartItem.findMany({
            where: { status: 'active' },
        });
        if (!cartItem) {
            throw new common_1.HttpException('error', common_1.HttpStatus.NOT_FOUND);
        }
        return cartItem;
    }
    async findOne(id) {
        const cartItem = await db_1.prisma.cartItem.findFirst({
            where: { id, status: 'active' },
        });
        if (!cartItem) {
            throw new common_1.HttpException(`not found this .... ${id}`, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        return cartItem;
    }
    async update(id, updateCartItemDto) {
        const cartItem = await db_1.prisma.cartItem.update({
            where: { id },
            data: updateCartItemDto,
        });
        if (!cartItem) {
            throw new common_1.HttpException(`not found this .... ${id}`, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        return cartItem;
    }
    async remove(id) {
        const cartItem = await db_1.prisma.cartItem.update({
            where: {
                id: id,
            },
            data: {
                status: 'delete',
            },
        });
        if (!cartItem) {
            throw new common_1.HttpException(`not found this .... ${id}`, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        return cartItem;
    }
    async getByUserId(userId) {
        const cartItems = await db_1.prisma.cartItem.findMany({
            where: {
                userId,
                status: 'active',
            },
        });
        if (!cartItems) {
            throw new common_1.HttpException(`not found this .... ${userId}`, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        return cartItems;
    }
};
CartItemService = __decorate([
    (0, common_1.Injectable)()
], CartItemService);
exports.CartItemService = CartItemService;
//# sourceMappingURL=cartitems.service.js.map