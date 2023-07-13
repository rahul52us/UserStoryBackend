"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
// Create a transporter using SMTP
const transporter = nodemailer_1.default.createTransport({
    host: "smtp.hostinger.com",
    port: 587,
    secure: false,
    auth: {
        user: "welcome@knowledgeforcurious.com",
        pass: "Knowledgeforcurious@123",
    },
});
// Create an email message
const message = {
    from: "welcome@knowledgeforcurious.com",
    to: "rahul52us@gmail.com",
    subject: "Hello, World!",
    text: "This is the body of the email",
};
// Send the email
transporter.sendMail(message, (err, info) => {
    if (err) {
        console.error("Error sending email:", err);
    }
    else {
        console.log("Email sent:", info);
    }
});
//# sourceMappingURL=sendMail.js.map