"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const routerHandler = (app) => {
    //find all the folder in the app directory and import all the routes
    const allFolders = (0, fs_1.readdirSync)(path_1.default.join(__dirname, "..", "routes"));
    allFolders.forEach((file) => {
        var _a;
        console.log(path_1.default.join(__dirname, "..", "routes", file));
        //if route file present then import it
        if ((0, fs_1.existsSync)(path_1.default.join(__dirname, "..", "routes", file)) ||
            (0, fs_1.existsSync)(path_1.default.join(__dirname, "..", "routes", file))) {
            const router = require(path_1.default.join(__dirname, "..", "routes", file));
            app.use("/api/v1/" + ((_a = file === null || file === void 0 ? void 0 : file.split(".")) === null || _a === void 0 ? void 0 : _a.at(0)), router.default);
        }
    });
};
exports.default = routerHandler;
