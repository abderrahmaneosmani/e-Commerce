"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authSliceFirebase = exports.signUp = exports.Logout = exports.singWithPopup = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const app_1 = require("firebase/app");
const storage_1 = require("firebase/storage");
const firebaseConfig_1 = require("./firebaseConfig");
const auth_1 = require("@firebase/auth");
const app = (0, app_1.initializeApp)(firebaseConfig_1.firebaseConfig);
const storage = (0, storage_1.getStorage)(app);
const initialState = {
    displayName: undefined,
    email: undefined,
    authenticated: undefined,
    error: undefined,
};
const provider = new auth_1.GoogleAuthProvider();
exports.singWithPopup = (0, toolkit_1.createAsyncThunk)("users/google", async (userId, thunkAPI) => {
    const provider = new auth_1.GoogleAuthProvider();
    return (0, auth_1.signInWithPopup)(firebaseConfig_1.auth, provider);
});
exports.Logout = (0, toolkit_1.createAsyncThunk)("users/logout", async (_, thunkAPI) => {
    return (0, auth_1.signOut)(firebaseConfig_1.auth);
});
exports.signUp = (0, toolkit_1.createAsyncThunk)("users/signup", async (user, thunkAPI) => {
    const { email, password } = user;
    return (0, auth_1.createUserWithEmailAndPassword)(firebaseConfig_1.auth, email, password);
});
exports.authSliceFirebase = (0, toolkit_1.createSlice)({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(exports.singWithPopup.fulfilled, (state, action) => {
            state.authenticated;
        });
        builder.addCase(exports.signUp.fulfilled, (state, action) => {
            state.email = state.email;
        });
        builder.addCase(exports.Logout.fulfilled, (state) => {
            state.email = "";
            state.authenticated = false;
            state.displayName = "";
            localStorage.removeItem("user");
        });
    },
});
//# sourceMappingURL=firebase-reducer.js.map