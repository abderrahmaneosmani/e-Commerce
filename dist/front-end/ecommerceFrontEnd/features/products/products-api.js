"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePrefetch = exports.useGetProductByIdQuery = exports.useUpdateProductMutation = exports.useGetProductsByCategoryIdQuery = exports.useAddProductMutation = exports.useGetAllProductsQuery = exports.productApi = void 0;
const react_1 = require("@reduxjs/toolkit/dist/query/react");
const vars_1 = require("../../utils/vars");
const auth_header_1 = require("../auth/auth-header");
const token = (0, auth_header_1.default)();
const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);
exports.productApi = (0, react_1.createApi)({
    reducerPath: "products",
    baseQuery: (0, react_1.fetchBaseQuery)({
        baseUrl: `${vars_1.default}/`,
        prepareHeaders(headers) {
            headers.set("authorization", `Bearer ${token}`);
            return headers;
        },
    }),
    tagTypes: ["Product"],
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: (search) => `products?s=${search}`,
        }),
        getProductsByCategoryId: builder.query({
            query: (categoryId) => `products/category?categoryId=${categoryId}`,
            providesTags: ["Product"],
        }),
        getProductById: builder.query({
            query: (productId) => `products?${productId}`,
            providesTags: ["Product"],
        }),
        addProduct: builder.mutation({
            query(body) {
                return {
                    url: "products",
                    method: "POST",
                    body,
                    Headers,
                };
            },
            invalidatesTags: ["Product"],
        }),
        updateProduct: builder.mutation({
            query(data) {
                const { id } = data, body = __rest(data, ["id"]);
                return {
                    url: `products/${id}`,
                    method: "PATCH",
                    body,
                    Headers,
                };
            },
            invalidatesTags: ["Product"],
        }),
    }),
});
exports.useGetAllProductsQuery = exports.productApi.useGetAllProductsQuery, exports.useAddProductMutation = exports.productApi.useAddProductMutation, exports.useGetProductsByCategoryIdQuery = exports.productApi.useGetProductsByCategoryIdQuery, exports.useUpdateProductMutation = exports.productApi.useUpdateProductMutation, exports.useGetProductByIdQuery = exports.productApi.useGetProductByIdQuery, exports.usePrefetch = exports.productApi.usePrefetch;
//# sourceMappingURL=products-api.js.map