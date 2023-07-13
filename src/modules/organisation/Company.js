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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterCompany = exports.createCompany = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const User_1 = __importDefault(require("../../schemas/User"));
const Company_1 = __importDefault(require("../../schemas/Company"));
const VerifyEmail_1 = __importDefault(require("../../schemas/VerifyEmail"));
const ProfileDetails_1 = __importDefault(require("../../schemas/ProfileDetails"));
const validation_1 = require("./utils/validation");
const function_1 = require("../config/function");
const generateToken_1 = __importDefault(require("../config/generateToken"));
dotenv_1.default.config();
const createCompany = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = validation_1.createValidation.validate(req.body);
        if (result.error) {
            throw (0, function_1.generateError)(result.error.details, 422);
        }
        const token = yield VerifyEmail_1.default.findOne({ token: req.params.token });
        if (!token) {
            throw (0, function_1.generateError)("Invalid token or token has expired", 400);
        }
        const user = yield User_1.default.findById(token.userId);
        if (!user || (user === null || user === void 0 ? void 0 : user.role) !== "admin") {
            throw (0, function_1.generateError)("Invalid token or token has expired", 400);
        }
        const existsComp = yield Company_1.default.findOne({
            company_name: req.body.company_name,
        });
        if (existsComp) {
            throw (0, function_1.generateError)(`${existsComp.company_name} organisation already exists`, 400);
        }
        const comp = new Company_1.default({
            company_name: req.body.company_name,
        });
        const createdComp = yield comp.save();
        const profileDetail = new ProfileDetails_1.default({
            user: user._id,
        });
        const createdProfileDetails = yield profileDetail.save();
        const updatedUser = yield User_1.default.findByIdAndUpdate(user._id, {
            $set: {
                name: req.body.name,
                profile_details: createdProfileDetails._id,
                company: createdComp._id,
                password: req.body.password
            },
        }, { new: true })
            .populate("profile_details")
            .populate("company");
        if (!updatedUser) {
            throw (0, function_1.generateError)("Something went wrong, contact administration", 400);
        }
        yield token.deleteOne();
        const _a = updatedUser.toObject(), { password } = _a, rest = __rest(_a, ["password"]);
        return res.status(201).send({
            message: `${comp.company_name} organisation has been created successfully`,
            data: Object.assign(Object.assign({}, rest), { authorization_token: (0, generateToken_1.default)({ userId: updatedUser._id }) }),
            statusCode: 201,
            success: true,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createCompany = createCompany;
const filterCompany = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _b, _c;
    try {
        const result = yield Company_1.default.findOne({
            company_name: (_c = (_b = req.query) === null || _b === void 0 ? void 0 : _b.company) === null || _c === void 0 ? void 0 : _c.trim(),
        });
        if (result) {
            throw (0, function_1.generateError)(`${req.query.company} organisation is not allowed`, 400);
        }
        res.status(200).send({
            message: `${req.query.company} organisation is allowed`,
            data: `${req.query.company} organisation is allowed`,
            statusCode: 200,
            success: true,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.filterCompany = filterCompany;
//# sourceMappingURL=Company.js.map