"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authenticate_1 = __importDefault(require("../modules/config/authenticate"));
const Testimonial_1 = require("../modules/Testimonial/Testimonial");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/create', authenticate_1.default, Testimonial_1.createTestimonail);
router.get(`/get`, Testimonial_1.getTestimonials);
exports.default = router;
//# sourceMappingURL=testimonial.js.map