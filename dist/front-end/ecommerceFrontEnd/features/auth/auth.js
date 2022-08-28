"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorSelector = exports.isUserAuthenticatedSelector = exports.emailSelector = exports.displayNameSelector = exports.authSelector = void 0;
const reselect_1 = require("reselect");
const authSelector = (state) => state.auth;
exports.authSelector = authSelector;
exports.displayNameSelector = (0, reselect_1.createSelector)(exports.authSelector, (auth) => {
    return auth.displayName;
});
exports.emailSelector = (0, reselect_1.createSelector)(exports.authSelector, (auth) => {
    return auth.email;
});
exports.isUserAuthenticatedSelector = (0, reselect_1.createSelector)(exports.authSelector, (auth) => {
    return auth.authenticated;
});
exports.errorSelector = (0, reselect_1.createSelector)(exports.authSelector, (auth) => {
    return auth.error;
});
//# sourceMappingURL=auth.js.map