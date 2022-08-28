"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.desIncreaseQuantity = exports.getTotalsPrice = exports.increaseQuantity = exports.removeItem = exports.addToCart = exports.deleteItem = exports.saveItem = exports.getAllCartItems = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const axios_1 = require("axios");
const vars_1 = require("../../utils/vars");
const auth_header_1 = require("../auth/auth-header");
const token = (0, auth_header_1.default)();
let data = [];
if (typeof window !== "undefined") {
    data = JSON.parse(localStorage.getItem("cartItems") || "[]") || [];
}
const initialState = {
    cartItems: data,
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};
const getIndexItem = (state, id) => {
    const ids = state.cartItems.map((item) => item.productId);
    return ids.indexOf(id);
};
exports.getAllCartItems = (0, toolkit_1.createAsyncThunk)("getAllCartItem", async (req, thunkAPI) => {
    const userId = req;
    const response = await fetch(`${vars_1.default}/cartitems?userId=${userId}`);
    const cartitems = await response.json();
    if (!cartitems) {
        throw "error";
    }
    return cartitems;
});
exports.saveItem = (0, toolkit_1.createAsyncThunk)("saveCarte", async (req, thunkAPI) => {
    var data = JSON.stringify(req);
    var config = {
        method: "post",
        url: `${vars_1.default}/cartitems`,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        data: data,
    };
    const response = await (0, axios_1.default)(config);
    const myData = response.data;
    return myData;
});
exports.deleteItem = (0, toolkit_1.createAsyncThunk)("deleteItem", async (req, thunkAPI) => {
    const cartItemId = req;
    const response = await fetch(`${vars_1.default}/cartitems/${cartItemId}`, {
        method: "DELETE",
    });
    return response.json();
});
const cartSlice = (0, toolkit_1.createSlice)({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = getIndexItem(state, action.payload.productId);
            if (itemIndex && itemIndex < 0) {
                state.cartItems.push(action.payload);
            }
            else {
                state.cartItems[itemIndex].quantity += 1;
            }
            state.cartQuantity += 1;
            state.cartAmount = 1;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        increaseQuantity: (state, action) => {
            const itemIndex = getIndexItem(state, action.payload);
            const oldItems = state.cartItems[itemIndex];
            console.log("olditens", oldItems);
            oldItems.quantity += 1;
            state.cartItems[itemIndex] = oldItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        desIncreaseQuantity: (state, action) => {
            const itemIndex = getIndexItem(state, action.payload);
            const oldItems = state.cartItems[itemIndex];
            if (oldItems.quantity > 1)
                oldItems.quantity -= 1;
            state.cartItems[itemIndex] = oldItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        getTotalsPrice: (state, action) => {
            const reducer = (previousValue, currentValue) => previousValue + currentValue;
            const calcTotal = state.cartItems.map((item) => {
                let total = 0;
                total = Number(item.totalPrice);
                return total;
            });
            if (calcTotal.length !== 0) {
                const amount = calcTotal.reduce(reducer);
                state.cartTotalAmount = amount;
            }
        },
        removeItem(state, action) {
            console.log(action.payload);
            const mycart = state.cartItems.filter((cart) => cart.id !== action.payload);
            state.cartItems = mycart;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(exports.saveItem.fulfilled, (state, action) => {
        });
        builder.addCase(exports.getAllCartItems.fulfilled, (state, action) => {
            state.cartItems = action.payload;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        });
        builder.addCase(exports.deleteItem.fulfilled, (state, action) => {
            const mycart = state.cartItems.filter((item) => item.id !== action.payload);
            state.cartItems = mycart;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        });
    },
});
_a = cartSlice.actions, exports.addToCart = _a.addToCart, exports.removeItem = _a.removeItem, exports.increaseQuantity = _a.increaseQuantity, exports.getTotalsPrice = _a.getTotalsPrice, exports.desIncreaseQuantity = _a.desIncreaseQuantity;
exports.default = cartSlice.reducer;
//# sourceMappingURL=cart-slice.js.map