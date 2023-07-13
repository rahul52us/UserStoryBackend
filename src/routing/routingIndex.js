"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
const company_1 = __importDefault(require("./company"));
const project_1 = __importDefault(require("./project"));
const testimonial_1 = __importDefault(require("./testimonial"));
const video_1 = __importDefault(require("./video"));
const importRoutings = (app) => {
    app.use("/api/auth", User_1.default);
    app.use("/api/organisation", company_1.default);
    app.use("/api/project", project_1.default);
    app.use("/api/testimonial", testimonial_1.default);
    app.use("/api/videos", video_1.default);
};
exports.default = importRoutings;
//# sourceMappingURL=routingIndex.js.map