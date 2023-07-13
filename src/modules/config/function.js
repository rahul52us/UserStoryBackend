"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateError = exports.handleErrorMessage = void 0;
const handleErrorMessage = (message, data, statusCode, success) => {
    return new Promise((resolve, reject) => {
        resolve({
            message,
            data,
            statusCode,
            success
        });
    });
};
exports.handleErrorMessage = handleErrorMessage;
const generateError = (message, status) => {
    const validationError = new Error(message);
    validationError['data'] = message;
    validationError["statusCode"] = status;
    return validationError;
};
exports.generateError = generateError;
//# sourceMappingURL=function.js.map