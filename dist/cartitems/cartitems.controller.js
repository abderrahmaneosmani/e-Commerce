"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartitemsController = void 0;
const common_1 = require("@nestjs/common");
const public_decorator_1 = require("../utils/public.decorator");
const cartitems_service_1 = require("./cartitems.service");
const create_cartItem_dto_1 = require("./dto/create-cartItem.dto");
const update_cartItem_1 = require("./dto/update-cartItem");
let CartitemsController = class CartitemsController {
    constructor(cartItemService) {
        this.cartItemService = cartItemService;
    }
    create(createCarteDto) {
        return this.cartItemService.create(createCarteDto);
    }
    getByUserId(query) {
        return this.cartItemService.getByUserId(query.userId);
    }
    findAll() {
        return this.cartItemService.findAll();
    }
    findOne(id) {
        return this.cartItemService.findOne(id);
    }
    update(id, updateCartIemDto) {
        return this.cartItemService.update(id, updateCartIemDto);
    }
    remove(id) {
        return this.cartItemService.remove(id);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cartItem_dto_1.CreateCartItemDto]),
    __metadata("design:returntype", void 0)
], CartitemsController.prototype, "create", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CartitemsController.prototype, "getByUserId", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CartitemsController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CartitemsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cartItem_1.UpdateCartItemDto]),
    __metadata("design:returntype", void 0)
], CartitemsController.prototype, "update", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CartitemsController.prototype, "remove", null);
CartitemsController = __decorate([
    (0, common_1.Controller)('cartitems'),
    __metadata("design:paramtypes", [cartitems_service_1.CartItemService])
], CartitemsController);
exports.CartitemsController = CartitemsController;
//# sourceMappingURL=cartitems.controller.js.map