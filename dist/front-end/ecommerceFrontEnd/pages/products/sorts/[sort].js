"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerSideProps = void 0;
const react_1 = require("react");
const ProductsList_1 = require("../../../components/products/ProductsList");
function sortProducts({ products }) {
    return (<div>
      <div>
        <ProductsList_1.default products={products}/>
      </div>
    </div>);
}
const getServerSideProps = async (context) => {
    const sort = context.query.sort;
    const hostname = typeof window !== "undefined" && window.location.hostname
        ? window.location.hostname
        : "jj";
    let host = context.req.headers.host;
    host === "localhost:3000"
        ? (host = `http://${host}`)
        : (host = `https://${host}`);
    const response = await fetch(`${host}/api/products/sorts?sort=${sort}`);
    const products = await response.json();
    return {
        props: {
            products,
        },
    };
};
exports.getServerSideProps = getServerSideProps;
exports.default = sortProducts;
//# sourceMappingURL=%5Bsort%5D.js.map