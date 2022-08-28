"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vars_1 = require("../../../../utils/vars");
async function handler(req, res) {
    const sort = req.query.sort;
    const response = await fetch(`${vars_1.default}/products/sort?sort=${sort}`);
    const product = await response.json();
    res.status(200).json(product);
}
exports.default = handler;
//# sourceMappingURL=index.js.map