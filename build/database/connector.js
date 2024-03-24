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
exports.sequelizeInstance = exports.connectToDb = void 0;
const sequelize_1 = require("sequelize");
require("dotenv").config();
const sequelizeInstance = new sequelize_1.Sequelize(process.env.DATABASE_URL, {
    logging: console.log,
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            // For self-signed certificates, set to true
            rejectUnauthorized: false,
            // Other SSL options as needed
        },
    },
});
exports.sequelizeInstance = sequelizeInstance;
const connectToDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelizeInstance.authenticate();
        yield sequelizeInstance.sync();
        console.log("Database connected successfully.");
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});
exports.connectToDb = connectToDb;
