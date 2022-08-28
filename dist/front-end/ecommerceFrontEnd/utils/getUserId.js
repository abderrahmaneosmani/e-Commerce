"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getUserId() {
    if (typeof window !== "undefined") {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        if (user && user.token) {
            return user.user.id;
        }
        else {
            return null;
        }
    }
}
exports.default = getUserId;
//# sourceMappingURL=getUserId.js.map