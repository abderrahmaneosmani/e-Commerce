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
exports.UsersrolesController = void 0;
const common_1 = require("@nestjs/common");
const create_user_role_dto_1 = require("./dto/create-user-role-dto");
const usersroles_service_1 = require("./usersroles.service");
let UsersrolesController = class UsersrolesController {
    constructor(usersrolesService) {
        this.usersrolesService = usersrolesService;
    }
    create(createUsersroleDto) {
        return this.usersrolesService.create(createUsersroleDto);
    }
    remove(id) {
        return this.usersrolesService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_role_dto_1.CreateUserRoleDto]),
    __metadata("design:returntype", void 0)
], UsersrolesController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersrolesController.prototype, "remove", null);
UsersrolesController = __decorate([
    (0, common_1.Controller)('usersroles'),
    __metadata("design:paramtypes", [usersroles_service_1.UsersrolesService])
], UsersrolesController);
exports.UsersrolesController = UsersrolesController;
//# sourceMappingURL=usersroles.controller.js.map