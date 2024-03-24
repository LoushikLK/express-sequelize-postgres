"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const helmet_1 = __importDefault(require("helmet"));
const topLevelMiddleware = (app) => {
    app.use((0, cors_1.default)({
        origin: "*",
        methods: "GET,POST,PUT,DELETE,PATCH",
        credentials: true,
    }));
    app.use(express_1.default.urlencoded({
        extended: true,
        limit: "50mb",
    }));
    app.use((0, express_fileupload_1.default)());
    app.use(express_1.default.json());
    app.use((0, helmet_1.default)());
    app.use((req, res, next) => {
        var _a;
        console.table([
            {
                METHOD: req.method,
                PATH: req.path,
                ip: req.ip,
                AGENT: (_a = req === null || req === void 0 ? void 0 : req.get("user-agent")) === null || _a === void 0 ? void 0 : _a.split("/")[0],
            },
        ]);
        next();
    });
};
exports.default = topLevelMiddleware;
