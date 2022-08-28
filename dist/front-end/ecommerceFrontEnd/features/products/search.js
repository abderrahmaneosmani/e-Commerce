"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyQuery = exports.addQuery = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = { query: "" };
const search = (0, toolkit_1.createSlice)({
    name: "search",
    initialState,
    reducers: {
        addQuery(state, action) {
            state.query += action.payload;
        },
        emptyQuery(state) {
            state.query = "";
        },
    },
});
_a = search.actions, exports.addQuery = _a.addQuery, exports.emptyQuery = _a.emptyQuery;
exports.default = search.reducer;
//# sourceMappingURL=search.js.map