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
exports.UserControllers = void 0;
const user_services_1 = require("../services/user.services");
exports.UserControllers = {
    updateSelfData: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            const { username, password, displayName } = req.body;
            const userId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
            yield (0, user_services_1.updateSelf)({
                username,
                password,
                displayName,
                id: userId,
            });
            res.status(200).json({
                msg: "User updated successfully",
                success: true,
            });
        }
        catch (error) {
            next(error);
        }
    }),
    checkUsername: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _b;
        try {
            const username = (_b = req.params) === null || _b === void 0 ? void 0 : _b.username;
            yield (0, user_services_1.findUserName)(username);
            res.status(200).json({
                msg: "Available username",
                success: true,
            });
        }
        catch (error) {
            next(error);
        }
    }),
    deleteSelfData: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _c;
        try {
            const userId = (_c = req === null || req === void 0 ? void 0 : req.params) === null || _c === void 0 ? void 0 : _c.id;
            yield (0, user_services_1.deleteSelf)(userId);
            res.status(200).json({
                msg: "User deleted successfully",
                success: true,
            });
        }
        catch (error) {
            next(error);
        }
    }),
};
