"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestimonials = exports.createTestimonail = void 0;
const Testimonial_1 = __importDefault(require("../../schemas/Testimonial"));
const function_1 = require("../config/function");
const validation_1 = require("./utils/validation");
const createTestimonail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.body.company = req.bodyData.company;
        req.body.user = req.userId;
        const result = validation_1.testimonialCreateValidation.validate(req.body);
        if (result.error) {
            throw (0, function_1.generateError)(result.error.details[0], 422);
        }
        const test = new Testimonial_1.default(req.body);
        const createdTestimonial = yield test.save();
        if (!createdTestimonial) {
            throw (0, function_1.generateError)("failed to create data", 400);
        }
        return res.status(201).send({
            message: "New Testimonial has been created successfully",
            data: createdTestimonial.toObject(),
            statusCode: 201,
            success: true,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createTestimonail = createTestimonail;
const getTestimonials = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = {};
        let limit = req.query.limit ? req.query.limit : 2;
        if (req.query.company) {
            query.company = req.query.company;
        }
        const testimonials = yield Testimonial_1.default.find(query).sort({ createdAt: -1 }).skip((req.query.page - 1) * limit).limit(limit);
        res.status(200).send({
            data: testimonials,
            message: 'Get Testimonials Successfully',
            statusCode: 200,
            success: true
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getTestimonials = getTestimonials;
//# sourceMappingURL=Testimonial.js.map