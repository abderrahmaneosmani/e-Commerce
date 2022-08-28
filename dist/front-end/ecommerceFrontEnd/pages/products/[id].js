"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerSideProps = void 0;
const react_1 = require("react");
const ProductDetails_1 = require("../../components/products/ProductDetails");
const vars_1 = require("../../utils/vars");
function getProductById({ product }) {
    return (<div>
      <ProductDetails_1.default product={product}/>
    </div>);
}
const getServerSideProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`${vars_1.default}/products/${id}`);
    const product = await res.json();
    return {
        props: {
            product,
        },
    };
};
exports.getServerSideProps = getServerSideProps;
exports.default = getProductById;
//# sourceMappingURL=%5Bid%5D.js.map