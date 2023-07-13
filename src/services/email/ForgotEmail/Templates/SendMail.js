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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Create a transporter using SMTP
const SendForgotPasswordMail = (names, username, link) => {
    const transporter = nodemailer_1.default.createTransport({
        host: "smtp.hostinger.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.WELCOME_REGISTER_EMAIL_USERNAME,
            pass: process.env.WELCOME_REGISTER_EMAIL_PASSWORD
        },
    });
    const templatePath = path.join(__dirname, 'forgot_email_templates.html');
    const template = fs.readFileSync(templatePath, 'utf8');
    // Replace placeholders in the template with actual data
    const personalizedTemplate = template
        .replace('{{name}}', names)
        .replace('{{resetLink}}', link);
    // Create an email message
    const message = {
        from: process.env.WELCOME_REGISTER_EMAIL_USERNAME,
        to: username,
        subject: "Forgot Password!",
        html: personalizedTemplate,
    };
    // Send the email
    return new Promise((resolve) => {
        transporter.sendMail(message, (err) => {
            if (err) {
                resolve({ success: false }); // Reject the promise in case of error
            }
            else {
                resolve({ success: true }); // Resolve the promise if the email is sent successfully
            }
        });
    });
};
exports.default = SendForgotPasswordMail;
//# sourceMappingURL=SendMail.js.map