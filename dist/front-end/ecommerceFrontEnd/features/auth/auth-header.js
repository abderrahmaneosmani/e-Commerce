"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function authHeader() {
    if (typeof window !== "undefined") {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        if (user && user.token) {
            return user.token;
        }
        else {
            return "";
        }
    }
}
exports.default = authHeader;
//# sourceMappingURL=auth-header.js.map