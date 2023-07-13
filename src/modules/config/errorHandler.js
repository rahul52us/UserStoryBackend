"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorMiddleware = (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        message: err.message || "Internal Server Error",
        data: err.data || "Internal Server Error",
        statusCode: err.statusCode || 500,
        success: err.success || false,
    });
};
exports.default = errorMiddleware;
//# sourceMappingURL=errorHandler.js.map