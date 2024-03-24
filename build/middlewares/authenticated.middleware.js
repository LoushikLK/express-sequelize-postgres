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
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const http_errors_1 = require("http-errors");
const jwt_helper_1 = require("../helpers/jwt.helper");
const isAuthenticated = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.headers.authorization)
            throw new http_errors_1.Unauthorized("User is not authorized.");
        // extract token from header
        const decoded = (0, jwt_helper_1.verifyToken)(req.headers.authorization);
        req.currentUser = {
            id: decoded === null || decoded === void 0 ? void 0 : decoded.id,
            username: decoded === null || decoded === void 0 ? void 0 : decoded.username,
            displayName: decoded === null || decoded === void 0 ? void 0 : decoded.displayName,
        };
        next();
    }
    catch (error) {
        const err = error;
        res.status(401).json({
            success: false,
            msg: err.message,
        });
    }
});
exports.isAuthenticated = isAuthenticated;
