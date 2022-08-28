"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authSlice = exports.loginPopUp = exports.logOut = exports.signIn = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const app_1 = require("firebase/app");
const firebaseConfig_1 = require("../firebase/firebaseConfig");
const firebaseConfig_2 = require("../firebase/firebaseConfig");
const axios_1 = require("axios");
const auth_1 = require("@firebase/auth");
const vars_1 = require("../../utils/vars");
const app = (0, app_1.initializeApp)(firebaseConfig_1.firebaseConfig);
const provider = new auth_1.GoogleAuthProvider();
let user = [];
let authenticated = false;
if (typeof window !== "undefined") {
    user = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user") || "{}")
        : null;
    user === null ? (authenticated = false) : (authenticated = true);
}
const initialState = {
    displayName: null,
    email: null,
    authenticated,
    error: null,
    user: user,
};
exports.signIn = (0, toolkit_1.createAsyncThunk)("signIn", async (req, thunkAPI) => {
    try {
        const { username, password } = req;
        const credential = {
            username,
            password,
        };
        const response = await (0, axios_1.default)({
            method: "post",
            url: `${vars_1.default}/auth/login`,
            data: {
                username,
                password,
            },
        });
        const { data } = response;
        const token = data.token;
        const user = data.user;
        const userData = { token, user };
        localStorage.setItem("user", JSON.stringify(userData));
        const email = user.email;
        const displayName = user.firstname;
        return { email, displayName };
    }
    catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    }
});
exports.logOut = (0, toolkit_1.createAsyncThunk)("logout", async (req, thunkAPI) => {
    localStorage.removeItem("user");
});
exports.loginPopUp = (0, toolkit_1.createAsyncThunk)("login/firebase", async (req, thunkAPI) => {
    var _a, _b;
    try {
        if (req.displayName === null) {
            const provider = new auth_1.GoogleAuthProvider();
            const response = await (0, auth_1.signInWithPopup)(firebaseConfig_2.auth, provider);
            const displayName = await ((_a = response.user) === null || _a === void 0 ? void 0 : _a.displayName);
            const email = (_b = response.user) === null || _b === void 0 ? void 0 : _b.email;
            return { displayName, email };
        }
        else {
            const displayName = req.displayName;
            const email = req.email;
            return { displayName, email };
        }
    }
    catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    }
});
exports.authSlice = (0, toolkit_1.createSlice)({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(exports.loginPopUp.fulfilled, (state, action) => {
            state.displayName = action.payload.displayName;
            state.displayName = action.payload.displayName;
            state.authenticated = true;
        });
        builder.addCase(exports.signIn.fulfilled, (state, action) => {
            state.authenticated = true;
            state.displayName = action.payload.displayName;
            state.email = action.payload.email;
        });
        builder.addCase(exports.logOut.fulfilled, (state) => {
            state.authenticated = false;
            state.displayName = "";
            state.email = "";
            state.user = [];
        });
    },
});
//# sourceMappingURL=auth-slice.js.map