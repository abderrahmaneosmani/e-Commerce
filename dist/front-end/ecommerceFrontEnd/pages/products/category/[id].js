"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerSideProps = void 0;
const react_1 = require("react");
const ProductsList_1 = require("../../../components/products/ProductsList");
const vars_1 = require("../../../utils/vars");
function getProductByCategoryId({ products }) {
    return (<div>
      <div>
        <ProductsList_1.default products={products}/>
      </div>
    </div>);
}
const getServerSideProps = async (context) => {
    const categoryId = context.params.id;
    const response = await fetch(`${vars_1.default}/products/category?categoryId=${categoryId}`);
    const products = await response.json();
    return {
        props: {
            products,
        },
    };
};
exports.getServerSideProps = getServerSideProps;
exports.default = getProductByCategoryId;
//# sourceMappingURL=%5Bid%5D.js.map