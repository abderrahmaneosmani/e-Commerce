"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ProductItem_1 = require("./ProductItem");
const link_1 = require("next/link");
function ProductList({ products }) {
    return (<div className="bg-white">
      <div className=" max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="overflow-auto mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (<link_1.default href="products/id" as={`/products/${product.id}`}>
              <a>
                <ProductItem_1.default product={product}/>
              </a>
            </link_1.default>))}
        </div>
      </div>
    </div>);
}
exports.default = ProductList;
//# sourceMappingURL=ProductsList.js.map