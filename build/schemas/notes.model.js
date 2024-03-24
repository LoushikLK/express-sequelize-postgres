"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connector_1 = require("../database/connector");
class Note extends sequelize_1.Model {
}
Note.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
        primaryKey: true,
    },
    userId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Users",
            key: "id",
        },
        onUpdate: "NO ACTION",
        onDelete: "CASCADE",
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: sequelize_1.DataTypes.TEXT,
    },
}, {
    // Other model options go here
    sequelize: connector_1.sequelizeInstance, // We need to pass the connection instance
    modelName: "Note", // We need to choose the model name
    tableName: "Notes",
    timestamps: true,
});
exports.default = Note;
