"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = exports.resetPasswordValidation = exports.forgotEmailValidation = exports.UserValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const UserValidation = joi_1.default.object({
    name: joi_1.default.string().when("role", {
        is: joi_1.default.not("admin"),
        then: joi_1.default.string().min(3).max(30).required().messages({
            "string.min": "Name must have a minimum length of {#limit}",
            "string.max": "Name should not exceed a maximum length of {#limit}",
            "any.required": "Name is required",
        }),
        otherwise: joi_1.default.string().allow("").optional(),
    }),
    username: joi_1.default.string().min(5).max(30).required().messages({
        "string.min": "username must have a minimum length of {#limit}",
        "string.max": "username should not exceed a maximum length of {#limit}",
        "any.required": "Username is required"
    }),
    pic: joi_1.default.string().allow("").optional(),
    is_active: joi_1.default.boolean().default(true),
    role: joi_1.default.string().valid("user", "admin", "superadmin", "manager", "customer", "support").default("user"),
    company: joi_1.default.string().when("role", {
        is: joi_1.default.not("admin"),
        then: joi_1.default.string().required().messages({
            "any.required": "Please select the company",
        }),
        otherwise: joi_1.default.string().allow("").optional(),
    }),
    password: joi_1.default.string().when("role", {
        is: joi_1.default.not("admin"),
        then: joi_1.default.string()
            .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
            .message("Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one digit.")
            .required(),
        otherwise: joi_1.default.string().allow("").optional(),
    }),
}).options({
    abortEarly: false,
});
exports.UserValidation = UserValidation;
const forgotEmailValidation = joi_1.default.object({
    username: joi_1.default.string().email().required().messages({
        "string.email": "Username should be a valid email address",
        "any.required": "Username is required",
    }),
});
exports.forgotEmailValidation = forgotEmailValidation;
const resetPasswordValidation = joi_1.default.object({
    password: joi_1.default.string()
        .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
        .message("Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one digit.")
        .required(),
    token: joi_1.default.string().required().messages({
        "any.required": "Token is  required"
    })
});
exports.resetPasswordValidation = resetPasswordValidation;
const loginValidation = joi_1.default.object({
    password: joi_1.default.string()
        .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
        .message("Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one digit.")
        .required(),
    username: joi_1.default.string().min(5).max(30).required().messages({
        "string.min": "username must have a minimum length of {#limit}",
        "string.max": "username should not exceed a maximum length of {#limit}",
        "any.required": "Username is required",
    })
});
exports.loginValidation = loginValidation;
//# sourceMappingURL=validation.js.map