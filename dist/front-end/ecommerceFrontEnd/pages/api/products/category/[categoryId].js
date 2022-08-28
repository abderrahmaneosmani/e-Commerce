"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vars_1 = require("../../../../utils/vars");
async function handler(req, res) {
    const categoryId = req.query.categoryId;
    const response = await fetch(`${vars_1.default}/products/category?categoryId=${categoryId}`);
    const products = await response.json();
    res.send(products);
}
exports.default = handler;
//# sourceMappingURL=%5BcategoryId%5D.js.map