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
exports.getUserById = exports.register = exports.login = void 0;
const http_errors_1 = require("http-errors");
const user_model_1 = __importDefault(require("../schemas/user.model"));
const hash_services_1 = __importDefault(require("./hash.services"));
function login({ username, password, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_model_1.default.findOne({ where: { username }, raw: true });
            if (!user)
                throw new http_errors_1.Unauthorized("No account is associated with you credentials please register first!");
            const isPasswordMatch = yield new hash_services_1.default().comparePassword(password, user.password);
            if (!isPasswordMatch)
                throw new http_errors_1.Unauthorized("Incorrect credentials, please try again!");
            return user;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.login = login;
function register({ username, password, displayName, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_model_1.default.findOne({ where: { username } });
            if (user)
                throw new http_errors_1.Unauthorized("Username already exist please login!");
            const hashPassword = yield new hash_services_1.default().hashPassword(password);
            yield user_model_1.default.create({
                username,
                password: hashPassword,
                displayName,
            }, {
                returning: false,
            });
        }
        catch (error) {
            console.log({ error });
            throw error;
        }
    });
}
exports.register = register;
function getUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_model_1.default.findByPk(id, {
                attributes: {
                    exclude: ["password"],
                },
            });
            return user;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.getUserById = getUserById;
