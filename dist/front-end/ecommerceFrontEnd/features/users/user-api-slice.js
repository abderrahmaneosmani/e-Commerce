"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateUserMutation = exports.useGetAllUsersQuery = exports.userApi = void 0;
const react_1 = require("@reduxjs/toolkit/query/react");
const vars_1 = require("../../utils/vars");
exports.userApi = (0, react_1.createApi)({
    reducerPath: "users",
    baseQuery: (0, react_1.fetchBaseQuery)({
        baseUrl: `${vars_1.default}/`,
    }),
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => `users`,
        }),
        createUser: builder.mutation({
            query(body) {
                return {
                    url: "users",
                    method: "POST",
                    body,
                };
            },
        }),
    }),
});
exports.useGetAllUsersQuery = exports.userApi.useGetAllUsersQuery, exports.useCreateUserMutation = exports.userApi.useCreateUserMutation;
//# sourceMappingURL=user-api-slice.js.map