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
exports.createVideosValidation = void 0;
const Joi = __importStar(require("joi"));
const createVideosValidation = Joi.object({
    title: Joi.string().min(2).max(120).trim().required().messages({
        'string.base': 'Title is required',
        'string.empty': 'Title is required',
        'string.min': 'Title should be at least 2 characters',
        'string.max': 'Title should not exceed 120 characters',
        'any.required': 'Title is required',
    }),
    videoType: Joi.string().required().messages({
        'string.base': 'Select any video type',
        'string.empty': 'Select any video type',
        'any.required': 'Select any video type',
    }),
    videoLink: Joi.string().min(4).max(350).trim().required().messages({
        'string.base': 'Link is required',
        'string.empty': 'Link is required',
        'string.min': 'Link should be at least 4 characters',
        'string.max': 'Link should not exceed 350 characters',
        'any.required': 'Link is required',
    }),
    description: Joi.string().min(45).max(1800).trim().messages({
        'string.base': 'Description is required',
        'string.empty': 'Description is required',
        'string.min': 'Description should be at least 45 characters',
        'string.max': 'Description should not exceed 1800 characters',
    }),
});
exports.createVideosValidation = createVideosValidation;
//# sourceMappingURL=videos.validation.js.map