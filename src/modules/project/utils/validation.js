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
exports.ProjectCreateValidation = void 0;
const Joi = __importStar(require("joi"));
const ProjectCreateValidation = Joi.object({
    project_name: Joi.string().required().messages({
        "any.required": "Project name is required.",
    }),
    subtitle: Joi.string().allow("").optional(),
    description: Joi.string()
        .min(30)
        .messages({
        "string.min": "Description must have a minimum length of {#limit}",
    })
        .allow("")
        .optional(),
    logo: Joi.string().allow("").optional(),
    due_date: Joi.string()
        .regex(/^\d{4}-\d{2}-\d{2}$/)
        .allow("")
        .optional(),
    priority: Joi.string()
        .valid("Low", "Medium", "High")
        .default("Medium")
        .messages({
        "any.only": "Priority must be one of 'Low', 'Medium', or 'High'.",
    }),
    project_manager: Joi.array().items(Joi.string()),
    start_date: Joi.string()
        .regex(/^\d{4}-\d{2}-\d{2}$/)
        .allow("")
        .optional(),
    end_date: Joi.when(Joi.ref("start_date"), {
        is: Joi.exist(),
        then: Joi.date().min(Joi.ref("start_date")).raw().messages({
            "date.min": "End date must be greater than or equal to the start date.",
        }),
        otherwise: Joi.optional(),
    }),
    status: Joi.string()
        .valid("BackLog", "Todo", "In Progress", "Done", "Completed")
        .default("Todo"),
    customers: Joi.array().items(Joi.string()),
    followers: Joi.array().items(Joi.string()),
    team_members: Joi.array().items(Joi.string()),
    attach_files: Joi.array().optional(),
})
    .messages({
    "date.base": "{{#label}} must be a valid date.",
})
    .options({
    abortEarly: false,
});
exports.ProjectCreateValidation = ProjectCreateValidation;
//# sourceMappingURL=validation.js.map