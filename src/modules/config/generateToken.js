"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyResetPasswordToken = exports.generateResetPasswordToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const generateToken = (payload) => {
    var _a;
    const secretKey = (_a = process.env.SECRET_KEY) !== null && _a !== void 0 ? _a : '@#$4515Rahulkushwa_675@#';
    const token = jsonwebtoken_1.default.sign(payload, secretKey, { expiresIn: process.env.EXPIRES_TOKEN });
    return token;
};
exports.default = generateToken;
const generateResetPasswordToken = (userId) => {
    var _a;
    const secretKey = (_a = process.env.SECRET_KEY) !== null && _a !== void 0 ? _a : '@#$4515Rahulkushwa_675@#';
    const token = jsonwebtoken_1.default.sign({ userId: userId }, secretKey, { expiresIn: '1h' });
    return token;
};
exports.generateResetPasswordToken = generateResetPasswordToken;
const verifyResetPasswordToken = (token) => {
    var _a;
    const secretKey = (_a = process.env.SECRET_KEY) !== null && _a !== void 0 ? _a : '@#$4515Rahulkushwa_675@#';
    const decoded = jsonwebtoken_1.default.verify(token, secretKey);
    return decoded === null || decoded === void 0 ? void 0 : decoded.userId;
};
exports.verifyResetPasswordToken = verifyResetPasswordToken;
//# sourceMappingURL=generateToken.js.map