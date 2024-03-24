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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSelf = exports.findUserName = exports.updateSelf = void 0;
const http_errors_1 = require("http-errors");
const user_model_1 = __importDefault(require("../schemas/user.model"));
function updateSelf({ username, password, displayName, id, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_model_1.default.update({
                username,
                password,
                displayName,
            }, {
                where: {
                    id,
                },
            });
            if (!user)
                throw new http_errors_1.Unauthorized("No account is associated with you credentials please register first!");
            return user;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.updateSelf = updateSelf;
function findUserName(username) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_model_1.default.findOne({ where: { username } });
            if (user)
                throw new http_errors_1.Conflict("Username already exist!");
            return true;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.findUserName = findUserName;
function deleteSelf(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_model_1.default.destroy({ where: { id } });
            if (!user)
                throw new http_errors_1.Unauthorized("User does not exist");
        }
        catch (error) {
            throw error;
        }
    });
}
exports.deleteSelf = deleteSelf;
