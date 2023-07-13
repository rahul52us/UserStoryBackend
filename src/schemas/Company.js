"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const companySchema = new mongoose_1.default.Schema({
    company_name: {
        type: String,
        unique: true,
        index: true,
        trim: true,
    },
    is_active: {
        type: Boolean,
        default: true
    },
    position_types: {
        type: Array,
        default: [
            "website_designer",
            "fullstack developer",
            "tester",
            "QA",
            "Block Chain developer",
            "software developer",
        ],
    },
    verified_email_allowed: {
        type: Boolean,
        default: false,
    },
    logo: {
        type: String,
    },
    mobileNo: {
        type: String,
    },
    workNo: {
        type: String,
    },
    facebookLink: {
        type: String,
    },
    instagramLink: {
        type: String,
    },
    twitterLink: {
        type: String,
    },
    githubLink: {
        type: String,
    },
    telegramLink: {
        type: String,
    },
    linkedInLink: {
        type: String,
    },
    country: {
        type: String,
        trim: true,
    },
    state: {
        type: String,
        trim: true,
    },
    city: {
        type: String,
        trim: true,
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Company", companySchema);
//# sourceMappingURL=Company.js.map