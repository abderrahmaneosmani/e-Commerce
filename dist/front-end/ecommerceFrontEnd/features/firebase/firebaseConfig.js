"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.firebaseConfig = void 0;
const auth_1 = require("@firebase/auth");
const app_1 = require("firebase/app");
const storage_1 = require("firebase/storage");
exports.firebaseConfig = {
    apiKey: "AIzaSyDxCW_O4OuAJTo4b0CKn9ZoYtXXCJ_2PpI",
    authDomain: "portfolio-9a3ea.firebaseapp.com",
    projectId: "portfolio-9a3ea",
    storageBucket: "portfolio-9a3ea.appspot.com",
    messagingSenderId: "541567822675",
    appId: "1:541567822675:web:e95b9479107a5f29160fa6",
    measurementId: "G-KY7Q7FRZ1N",
};
const app = (0, app_1.initializeApp)(exports.firebaseConfig);
const storage = (0, storage_1.getStorage)(app);
exports.auth = (0, auth_1.getAuth)(app);
//# sourceMappingURL=firebaseConfig.js.map