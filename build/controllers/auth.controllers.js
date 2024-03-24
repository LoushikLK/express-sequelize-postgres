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
exports.AuthController = void 0;
const jwt_helper_1 = require("../helpers/jwt.helper");
const auth_services_1 = require("../services/auth.services");
exports.AuthController = {
    login: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { username, password } = req.body;
            const user = yield (0, auth_services_1.login)({ username, password });
            const accessToken = (0, jwt_helper_1.generateToken)(user);
            res.status(200).json({
                msg: "Login Successful",
                success: true,
                data: { user, accessToken },
            });
        }
        catch (error) {
            next(error);
        }
    }),
    register: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { password, username, displayName } = req.body;
            yield (0, auth_services_1.register)({ username, password, displayName });
            res.status(200).json({
                msg: "Register Successful",
                success: true,
            });
        }
        catch (error) {
            next(error);
        }
    }),
    currentUser: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            //get user data
            let user = yield (0, auth_services_1.getUserById)((_a = req === null || req === void 0 ? void 0 : req.currentUser) === null || _a === void 0 ? void 0 : _a.id);
            res.status(200).json({
                msg: "User Details",
                success: true,
                data: user,
            });
        }
        catch (error) {
            next(error);
        }
    }),
};
