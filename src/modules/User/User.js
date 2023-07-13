"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getUsersByCompany = exports.VerifyEmailToken = exports.resetPassword = exports.forgotPassword = exports.MeUser = exports.loginUser = exports.createUser = void 0;
const User_1 = __importDefault(require("../../schemas/User"));
const function_1 = require("../config/function");
const dotenv_1 = __importDefault(require("dotenv"));
const validation_1 = require("./utils/validation");
const generateToken_1 = __importStar(require("../config/generateToken"));
const ResetPasswordToken_1 = __importDefault(require("../../schemas/ResetPasswordToken"));
const SendMail_1 = __importDefault(require("../../services/email/ForgotEmail/Templates/SendMail"));
const ResetPasswordToken_2 = __importDefault(require("../../schemas/ResetPasswordToken"));
const SendMail_2 = __importDefault(require("../../services/email/ResetEmail/Templates/SendMail"));
const Company_1 = __importDefault(require("../../schemas/Company"));
const SendMail_3 = __importDefault(require("../../services/email/RegisterEmail/Templates/SendMail"));
const VerifyEmail_1 = __importDefault(require("../../schemas/VerifyEmail"));
const ProfileDetails_1 = __importDefault(require("../../schemas/ProfileDetails"));
dotenv_1.default.config();
const MeUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).send({
        message: `get successfully data`,
        data: req.bodyData,
        statusCode: 201,
        success: true,
    });
});
exports.MeUser = MeUser;
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const result = validation_1.UserValidation.validate(req.body);
        if (result.error) {
            throw (0, function_1.generateError)(result.error.details, 422);
        }
        const existUser = yield User_1.default.findOne({ username: req.body.username });
        if (existUser) {
            throw (0, function_1.generateError)(`${existUser.username} user already exists`, 400);
        }
        if (req.body.role !== "admin") {
            const selectedCompany = yield Company_1.default.findOne({
                _id: (_a = req.body.company) === null || _a === void 0 ? void 0 : _a.trim(),
                is_active: true,
            });
            if (!selectedCompany) {
                throw (0, function_1.generateError)(`Company does not exist`, 400);
            }
            const user = new User_1.default({
                username: req.body.username,
                name: req.body.name,
                password: req.body.password,
                company: selectedCompany._id,
                role: req.body.role,
                is_active: selectedCompany.verified_email_allowed ? false : true,
            });
            const savedUser = yield user.save();
            if (!savedUser) {
                throw (0, function_1.generateError)(`Cannot create the user`, 400);
            }
            const profileDetail = new ProfileDetails_1.default({ user: savedUser._id }); // Provide the user reference
            const createdProfileDetail = yield profileDetail.save();
            savedUser.profile_details = createdProfileDetail._id; // Set profileDetails ID in the User schema
            yield savedUser.save();
            if (selectedCompany.verified_email_allowed) {
                const token = (0, generateToken_1.generateResetPasswordToken)(savedUser._id);
                const storeToken = new VerifyEmail_1.default({
                    userId: savedUser._id,
                    token: token,
                });
                const sendMail = yield (0, SendMail_3.default)(savedUser.name, savedUser.username, `${process.env.FRONTEND_BASE_URL}/verify-account/${token}`);
                if (!sendMail.success) {
                    yield savedUser.deleteOne();
                    yield profileDetail.deleteOne();
                    yield storeToken.deleteOne();
                    throw (0, function_1.generateError)(`Failed to send mail to ${req.body.username} please try again later`, 400);
                }
                return res.status(200).send({
                    data: `Check your email and verify your ${user.username} account`,
                    statusCode: 200,
                    success: true,
                    message: `Check your email and verify your ${user.username} account`,
                });
            }
            else {
                const _b = savedUser.toObject(), { password } = _b, userData = __rest(_b, ["password"]);
                const responseUser = Object.assign(Object.assign({}, userData), { authorization_token: (0, generateToken_1.default)({ userId: savedUser._id }) });
                return res.status(200).send({
                    data: responseUser,
                    statusCode: 200,
                    success: true,
                    message: `${user.username} account has been created for the ${selectedCompany.company_name} organisation`,
                });
            }
        }
        else {
            const user = new User_1.default({
                username: req.body.username,
                role: req.body.role,
                is_active: false,
            });
            const createdUser = yield user.save();
            if (!createdUser) {
                throw (0, function_1.generateError)(`Cannot create the user`, 400);
            }
            const token = (0, generateToken_1.generateResetPasswordToken)(createdUser._id);
            const storeToken = new VerifyEmail_1.default({
                userId: createdUser._id,
                token: token,
            });
            const savedToken = yield storeToken.save();
            const sendMail = yield (0, SendMail_3.default)(createdUser.username, createdUser.username, `${process.env.FRONTEND_BASE_URL}/verify-account/${token}`);
            if (!sendMail.success) {
                yield createdUser.deleteOne();
                yield savedToken.deleteOne();
                throw (0, function_1.generateError)(`Failed to send mail to ${req.body.username} please try again later`, 400);
            }
            return res.status(201).send({
                message: `${createdUser.username} account has been created. Please verify your account.`,
                data: `${createdUser.username} account has been created. Please verify your account.`,
                statusCode: 201,
                success: true,
            });
        }
    }
    catch (err) {
        next(err);
    }
});
exports.createUser = createUser;
const VerifyEmailToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = yield VerifyEmail_1.default.findOne({
            token: req.params.token,
        });
        if (token) {
            const updatedData = yield User_1.default.findByIdAndUpdate(token.userId, { $set: { is_active: true } }, { new: true });
            if (updatedData) {
                res.status(200).send({
                    message: `Account has been verified succesfully`,
                    success: true,
                    data: updatedData,
                    statusCode: 200,
                });
            }
            else {
                throw (0, function_1.generateError)(`Invalid token or token has been expired`, 400);
            }
        }
        else {
            throw (0, function_1.generateError)(`Invalid token or token has been expired`, 400);
        }
    }
    catch (err) {
        next(err);
    }
});
exports.VerifyEmailToken = VerifyEmailToken;
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = validation_1.loginValidation.validate(req.body);
        if (result.error) {
            throw (0, function_1.generateError)(result.error.details, 422);
        }
        const existUser = yield User_1.default.findOne({ username: req.body.username });
        if (!existUser) {
            throw (0, function_1.generateError)(`${req.body.username} user does not exist`, 401);
        }
        const _c = existUser.toObject(), { password } = _c, userData = __rest(_c, ["password"]);
        if (password !== req.body.password) {
            throw (0, function_1.generateError)(`Invalid username and password`, 400);
        }
        const responseUser = Object.assign(Object.assign({}, userData), { authorization_token: (0, generateToken_1.default)({ userId: userData._id }) });
        res.status(200).send({
            message: `${existUser.username} user has been logged in successfully`,
            data: responseUser,
            statusCode: 200,
            success: true,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.loginUser = loginUser;
const forgotPassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = validation_1.forgotEmailValidation.validate(req.body);
        if (result.error) {
            throw (0, function_1.generateError)(result.error.details, 422);
        }
        const user = yield User_1.default.findOne({ username: req.body.username });
        if (!user) {
            throw (0, function_1.generateError)(`${req.body.username} email does not exist`, 400);
        }
        const resetData = new ResetPasswordToken_1.default({
            userId: user.id,
            token: (0, generateToken_1.generateResetPasswordToken)(user.id),
        });
        const savedData = yield resetData.save();
        if (!savedData) {
            throw (0, function_1.generateError)(`Cannot send the mail. Please try again later`, 400);
        }
        const sendMail = yield (0, SendMail_1.default)(user.name, user.username, `${process.env.RESET_PASSWORD_LINK}/${resetData.token}`);
        if (!sendMail.success) {
            yield resetData.deleteOne();
            throw (0, function_1.generateError)(`Cannot send the mail. Please try again later`, 400);
        }
        res.status(200).send({
            message: `Link has been sent to ${req.body.username} email`,
            data: `Link has been sent to ${req.body.username} email`,
            statusCode: 200,
            success: true,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.forgotPassword = forgotPassword;
const resetPassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = validation_1.resetPasswordValidation.validate(req.body);
        if (result.error) {
            throw (0, function_1.generateError)(result.error.details, 422);
        }
        const token = yield ResetPasswordToken_2.default.findOne({ token: req.body.token });
        if (!token) {
            throw (0, function_1.generateError)(`Invalid token or token has expired`, 400);
        }
        const user = yield User_1.default.findByIdAndUpdate(token.userId, {
            $set: { password: req.body.password },
        });
        if (!user) {
            throw (0, function_1.generateError)(`Invalid token or token has expired`, 400);
        }
        yield token.deleteOne();
        yield (0, SendMail_2.default)(user.name, user.username, `${process.env.FRONTEND_BASE_URL}`);
        res.status(200).send({
            message: `Password has been changed successfully`,
            data: `Password has been changed successfully`,
            statusCode: 200,
            success: true,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.resetPassword = resetPassword;
// get Organisation of the organisations
const getUsersByCompany = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { is_active, position } = req.body;
        const query = {
            company: req.bodyData.company,
        };
        if (is_active !== undefined) {
            query.is_active = is_active;
        }
        if (position && position.length !== 0) {
            query.position = { $in: position };
        }
        const users = yield User_1.default.find(query).select('-password');
        if (!users) {
            throw (0, function_1.generateError)('Something went wrong while fetching the users', 400);
        }
        res.status(200).send({
            message: 'Fetch Users Successfully',
            data: users,
            statusCode: 200,
            success: true,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getUsersByCompany = getUsersByCompany;
//# sourceMappingURL=User.js.map