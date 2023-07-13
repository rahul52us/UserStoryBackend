"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authenticate_1 = __importDefault(require("../modules/config/authenticate"));
const project_1 = require("../modules/project/project");
const router = express_1.default.Router();
router.post("/create", authenticate_1.default, project_1.createProject);
router.get('/get', authenticate_1.default, project_1.getProject);
exports.default = router;
//# sourceMappingURL=project.js.map