"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vars_1 = require("../../../utils/vars");
async function handler(req, res) {
    const productId = req.query.id;
    const response = await fetch(`${vars_1.default}/products/${productId}`);
    const product = await response.json();
    res.status(200).json(product);
}
exports.default = handler;
//# sourceMappingURL=%5Bid%5D.js.map