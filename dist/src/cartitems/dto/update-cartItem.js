"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCartItemDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cartItem_dto_1 = require("./create-cartItem.dto");
class UpdateCartItemDto extends (0, mapped_types_1.PartialType)(create_cartItem_dto_1.CreateCartItemDto) {
}
exports.UpdateCartItemDto = UpdateCartItemDto;
//# sourceMappingURL=update-cartItem.js.map