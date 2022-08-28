"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vars_1 = require("../../../utils/vars");
async function handler(req, res) {
    const response = await fetch(`${vars_1.default}/products`);
    const products = await response.json();
    res.status(200).json(products);
}
exports.default = handler;
//# sourceMappingURL=index.js.map