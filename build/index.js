"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const connector_1 = require("./database/connector");
const router_helper_1 = __importDefault(require("./helpers/router.helper"));
const bottom_middleware_1 = __importDefault(require("./middlewares/bottom.middleware"));
const top_middleware_1 = __importDefault(require("./middlewares/top.middleware"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.APP_PORT || 8000;
const server = (0, http_1.createServer)(app);
(0, connector_1.connectToDb)(); // connect to database
(0, top_middleware_1.default)(app); //setup middleware
(0, router_helper_1.default)(app); //this automatically creates routes in the routes folder i.e. if a file is auth.route.ts then its actual file will be http://locxalhost:8000/api/v1/auth
(0, bottom_middleware_1.default)(app); //setup bottom middleware handles (e.g. error ,not found route)
//server.listen(PORT, () => {
//console.log(`Server started on port ${PORT}`);
//});
exports.default = app;
