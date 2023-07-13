"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TestimonialSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"],
    },
    company: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Organisation",
        required: [true, "Organisation is required"],
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    profession: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        trim: true,
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Testimonial", TestimonialSchema);
//# sourceMappingURL=Testimonial.js.map