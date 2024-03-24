"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsernameValidation = exports.deleteSelfValidations = exports.updateValidations = void 0;
const express_validator_1 = require("express-validator");
exports.updateValidations = [
    (0, express_validator_1.param)("id")
        .notEmpty()
        .withMessage("Id is required")
        .isUUID()
        .withMessage("Id must be a valid Id"),
    (0, express_validator_1.body)("password")
        .optional()
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),
];
exports.deleteSelfValidations = [
    (0, express_validator_1.param)("id")
        .notEmpty()
        .withMessage("Id is required")
        .isUUID()
        .withMessage("Id must be a valid Id"),
];
exports.getUsernameValidation = [
    (0, express_validator_1.param)("username").notEmpty().withMessage("username is required"),
];
