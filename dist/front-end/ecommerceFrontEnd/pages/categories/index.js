"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerSideProps = void 0;
const react_1 = require("react");
const Categories_1 = require("../../components/categories/Categories");
const vars_1 = require("../../utils/vars");
function categories({ products, sections }) {
    return <Categories_1.default products={products} sections={sections}/>;
}
const getServerSideProps = async (context) => {
    const res = await fetch(`${vars_1.default}/products`);
    const products = await res.json();
    const response = await fetch(`${vars_1.default}/categories`);
    const sections = await response.json();
    return {
        props: {
            products,
            sections,
        },
    };
};
exports.getServerSideProps = getServerSideProps;
exports.default = categories;
//# sourceMappingURL=index.js.map