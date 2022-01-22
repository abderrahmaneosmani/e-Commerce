"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editFileName = exports.imageFileFilter = void 0;
const posix_1 = require("path/posix");
const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|png|jpeg)$/)) {
        return callback(new Error('only files are allowed'), false);
    }
    callback(null, true);
};
exports.imageFileFilter = imageFileFilter;
const editFileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = (0, posix_1.extname)(file.originalname);
    const randomName = Array(4)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
    callback(null, `${name}-${randomName}${fileExtName}`);
};
exports.editFileName = editFileName;
//# sourceMappingURL=file-uploading-utils.js.map