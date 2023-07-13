"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Company_1 = require("../modules/organisation/Company");
const router = express_1.default.Router();
router.post("/create/:token", Company_1.createCompany);
router.get("/search", Company_1.filterCompany);
exports.default = router;
//# sourceMappingURL=company.js.map