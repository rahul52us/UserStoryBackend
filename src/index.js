"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./db/db");
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const errorHandler_1 = __importDefault(require("./modules/config/errorHandler"));
const routingIndex_1 = __importDefault(require("./routing/routingIndex"));
const http_1 = __importDefault(require("http"));
const chatSocket_1 = require("./modules/chatSocket/chatSocket");
const app = (0, express_1.default)();
dotenv_1.default.config();
// create the server
const server = http_1.default.createServer(app);
(0, chatSocket_1.setupSocket)(server);
// use the body-parser
app.use(body_parser_1.default.json({ limit: "50mb" })); // Increase the size limit for JSON bodies
app.use(body_parser_1.default.urlencoded({ extended: true })); // Parse URL-encoded bodies
// Enable CORS for all routes and all origins
app.use((0, cors_1.default)({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
}));
// import routing function
(0, routingIndex_1.default)(app);
// Apply the error handler middleware
app.use(errorHandler_1.default);
server.listen(process.env.PORT, () => {
    console.log(`The server is running on port ${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map