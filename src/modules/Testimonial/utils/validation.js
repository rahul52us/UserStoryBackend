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
exports.testimonialCreateValidation = void 0;
const Joi = __importStar(require("joi"));
const testimonialCreateValidation = Joi.object({
    name: Joi.string().required().trim().min(2).max(50).messages({
        "any.required": "Name is required",
        "string.empty": "Name is required",
        "string.min": "Name must be at least {#limit} characters long",
        "string.max": "Name cannot exceed {#limit} characters",
    }),
    user: Joi.string().required().messages({
        "any.required": "User is required",
        "string.empty": "User is required",
    }),
    company: Joi.any().allow(null).messages({
        "any.required": "Organisation is required",
        "string.empty": "Organisation is required",
    }),
    profession: Joi.string().required().trim().min(2).max(180).messages({
        "any.required": "profession is required",
        "string.empty": "profession is required",
        "string.min": "profession must be at least {#limit} characters long",
        "string.max": "profession cannot exceed {#limit} characters",
    }),
    image: Joi.string().trim().allow("").optional(),
    description: Joi.string().required().trim().min(10).max(500).messages({
        "any.required": "Description is required",
        "string.empty": "Description is required",
        "string.min": "Description must be at least {#limit} characters long",
        "string.max": "Description cannot exceed {#limit} characters",
    }),
}).options({
    abortEarly: false,
});
exports.testimonialCreateValidation = testimonialCreateValidation;
//# sourceMappingURL=validation.js.map