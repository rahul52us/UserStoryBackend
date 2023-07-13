"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const AttachFiles = new mongoose_1.default.Schema({
    project: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Project",
    },
    title: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    file: {
        type: String,
        trim: true,
    },
}, { timestamps: true });
const ProjectSchema = new mongoose_1.default.Schema({
    project_name: {
        type: String,
        required: true,
        trim: true,
    },
    subtitle: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    logo: {
        type: String,
        trim: true,
    },
    priority: {
        type: String,
        enum: ["Low", "Medium", "High"],
        default: "Medium",
    },
    is_active: {
        type: Boolean,
        default: true,
    },
    createdBy: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    company: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "Company",
    },
    project_manager: {
        type: [
            {
                type: mongoose_1.default.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        default: [],
    },
    status: {
        type: String,
        enum: ["BackLog", "Todo", "In Progress", "Done", "Completed"],
        default: "BackLog",
    },
    start_date: {
        type: Date,
    },
    end_date: {
        type: Date,
    },
    due_date: {
        type: Date,
    },
    customers: {
        type: [
            {
                type: mongoose_1.default.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        default: [],
    },
    team_members: {
        type: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" }],
        default: [],
    },
    followers: {
        type: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" }],
        default: [],
    },
    approval: {
        type: String,
        enum: ["Satisfactory", "Unsatisfactory"],
    },
    attach_files: [AttachFiles],
}, { timestamps: true });
exports.default = mongoose_1.default.model("Project", ProjectSchema);
//# sourceMappingURL=Project.js.map