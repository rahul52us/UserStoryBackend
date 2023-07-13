"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const videos_1 = require("../modules/videos/videos");
const authenticate_1 = __importDefault(require("../modules/config/authenticate"));
const router = express_1.default.Router();
router.post("/create", authenticate_1.default, videos_1.createVideo);
exports.default = router;
//# sourceMappingURL=video.js.map