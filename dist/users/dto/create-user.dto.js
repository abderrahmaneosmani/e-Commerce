"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const update_user_dto_1 = require("./update-user.dto");
class UpdateUserDto extends (0, mapped_types_1.PartialType)(update_user_dto_1.CreateUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=create-user.dto.js.map