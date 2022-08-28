"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const db_1 = require("../dbConfig/db");
let OrdersService = class OrdersService {
    async create(createProductDto) {
        const order = await db_1.prisma.order.create({ data: createProductDto });
        if (!order) {
            throw new common_1.HttpException(`we can create this order`, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        return order;
    }
    async findAll() {
        const orders = await db_1.prisma.order.findMany({ where: { status: 'active' } });
        if (!orders) {
            throw new common_1.HttpException(`not found`, common_1.HttpStatus.NOT_FOUND);
        }
        return orders;
    }
    async findOne(id) {
        const order = await db_1.prisma.order.findFirst({
            where: { id, status: 'active' },
        });
        if (!order) {
            throw new common_1.HttpException(`not found this ${id}`, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        return order;
    }
    async update(id, updateUserDto) {
        const order = await db_1.prisma.order.update({
            where: { id },
            data: updateUserDto,
        });
        if (!order) {
            throw new common_1.HttpException(`not found this .... ${id}`, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        return order;
    }
    async remove(id) {
        const order = await db_1.prisma.order.update({
            where: { id },
            data: { status: 'delete' },
        });
        if (!order) {
            throw new common_1.HttpException(`not found this .... ${id}`, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        return order;
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)()
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map