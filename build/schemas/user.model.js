"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connector_1 = require("../database/connector");
const notes_model_1 = __importDefault(require("./notes.model"));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
        primaryKey: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    displayName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    // Other model options go here
    sequelize: connector_1.sequelizeInstance, // We need to pass the connection instance
    modelName: "User", // We need to choose the model name
    tableName: "Users",
    timestamps: true,
});
User.hasMany(notes_model_1.default, { as: "notes" });
notes_model_1.default.belongsTo(User, { foreignKey: "userId" });
exports.default = User;
