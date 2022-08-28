"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAddCategoryMutation = exports.useGetAllCategoriesQuery = exports.categoryApi = void 0;
const react_1 = require("@reduxjs/toolkit/dist/query/react");
const vars_1 = require("../../utils/vars");
const auth_header_1 = require("../auth/auth-header");
const token = (0, auth_header_1.default)();
exports.categoryApi = (0, react_1.createApi)({
    reducerPath: "categories",
    baseQuery: (0, react_1.fetchBaseQuery)({
        baseUrl: `${vars_1.default}/`,
        prepareHeaders(headers) {
            headers.set("authorization", `Bearer ${token}`);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => "categories",
        }),
        addCategory: builder.mutation({
            query(body) {
                return {
                    url: "categories",
                    method: "POST",
                    body,
                };
            },
        }),
    }),
});
exports.useGetAllCategoriesQuery = exports.categoryApi.useGetAllCategoriesQuery, exports.useAddCategoryMutation = exports.categoryApi.useAddCategoryMutation;
//# sourceMappingURL=categories-api.js.map