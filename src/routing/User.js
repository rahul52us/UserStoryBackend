"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = require("../modules/User/User");
const authenticate_1 = __importDefault(require("../modules/config/authenticate"));
const router = express_1.default.Router();
router.post("/create", User_1.createUser);
router.post('/login', User_1.loginUser);
router.post('/me', authenticate_1.default, User_1.MeUser);
router.post('/forgot-password', User_1.forgotPassword);
router.post('/reset-password', User_1.resetPassword);
router.get('/verify-email/:token', User_1.VerifyEmailToken);
router.get('/get/users', authenticate_1.default, User_1.getUsersByCompany);
exports.default = router;
//# sourceMappingURL=User.js.map