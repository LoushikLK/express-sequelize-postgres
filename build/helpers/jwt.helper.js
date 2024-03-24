"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const http_errors_1 = require("http-errors");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (payload, options) => {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret)
        throw new http_errors_1.InternalServerError("JWT secret is not found.");
    return jsonwebtoken_1.default.sign(payload, jwtSecret, {
        expiresIn: (options === null || options === void 0 ? void 0 : options.expiresIn) || "1d",
    });
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret)
        throw new http_errors_1.InternalServerError("JWT secret is not found.");
    return jsonwebtoken_1.default.verify(token === null || token === void 0 ? void 0 : token.split(" ")[1], jwtSecret);
};
exports.verifyToken = verifyToken;
