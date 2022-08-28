"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSelector = exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const auth_slice_1 = require("../features/auth/auth-slice");
const products_api_1 = require("../features/products/products-api");
const react_redux_1 = require("react-redux");
const categories_api_1 = require("../features/categories/categories-api");
const firebase_reducer_1 = require("../features/firebase/firebase-reducer");
const cart_slice_1 = require("../features/shoppingCart/cart-slice");
const cart_slice_2 = require("../features/shoppingCart/cart-slice");
const search_1 = require("../features/products/search");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        cartItem: cart_slice_1.default,
        auth: auth_slice_1.authSlice.reducer,
        firebase: firebase_reducer_1.authSliceFirebase.reducer,
        [products_api_1.productApi.reducerPath]: products_api_1.productApi.reducer,
        [categories_api_1.categoryApi.reducerPath]: categories_api_1.categoryApi.reducer,
        search: search_1.default,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});
exports.store.dispatch(cart_slice_2.getAllCartItems);
exports.useSelector = react_redux_1.useSelector;
//# sourceMappingURL=store.js.map