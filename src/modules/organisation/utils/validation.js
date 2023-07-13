"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createValidation = void 0;
const Joi = __importStar(require("joi"));
const createValidation = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
        "string.min": "Name must have a minimum length of {#limit}",
        "string.max": "Name should not exceed a maximum length of {#limit}",
        "any.required": "Name is required",
    }),
    username: Joi.string().min(5).max(30).required().messages({
        "string.min": "username must have a minimum length of {#limit}",
        "string.max": "username should not exceed a maximum length of {#limit}",
        "any.required": "Username is required",
    }),
    company_name: Joi.string().min(3).max(30).required().messages({
        "string.min": "organisation name must have a minimum length of {#limit}",
        "string.max": "organisation name should not exceed a maximum length of {#limit}",
        "any.required": "organisation is required",
    }),
    password: Joi.string()
        .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
        .message("Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one digit.")
        .required(),
}).options({
    abortEarly: false
});
exports.createValidation = createValidation;
//# sourceMappingURL=validation.js.map