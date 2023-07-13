"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const User_1 = __importDefault(require("../../schemas/User"));
const function_1 = require("./function");
dotenv_1.default.config();
const authenticate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token) {
            throw (0, function_1.generateError)("Unauthorized User", 401);
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        if (!decoded) {
            throw (0, function_1.generateError)("Unauthorized User", 401);
        }
        const user = yield User_1.default.findById(decoded.userId);
        if (!user) {
            throw (0, function_1.generateError)("Unauthorized User", 401);
        }
        const _b = user.toObject(), { password } = _b, userData = __rest(_b, ["password"]);
        req.userId = decoded.userId;
        req.bodyData = userData;
        next();
    }
    catch (err) {
        const error = (0, function_1.generateError)(`Authentication Error: ${err.message}`, 401);
        const errorMessage = yield (0, function_1.handleErrorMessage)(error.message, error.data, error.statusCode, false);
        return res.status(error.statusCode).json(errorMessage);
    }
});
exports.default = authenticate;
//# sourceMappingURL=authenticate.js.map