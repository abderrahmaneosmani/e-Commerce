"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const crate_product_dto_1 = require("./crate-product.dto");
class UpdateProductDto extends (0, mapped_types_1.PartialType)(crate_product_dto_1.CreateProductDto) {
}
exports.UpdateProductDto = UpdateProductDto;
//# sourceMappingURL=update-product.dto.js.map