"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNoteValidation = exports.createNoteValidation = void 0;
const express_validator_1 = require("express-validator");
exports.createNoteValidation = [
    (0, express_validator_1.body)("title").notEmpty().withMessage("title is required"),
    (0, express_validator_1.body)("content").notEmpty().withMessage("content is required"),
];
exports.updateNoteValidation = [
    (0, express_validator_1.param)("id")
        .notEmpty()
        .withMessage("id is required")
        .isUUID()
        .withMessage("id is invalid"),
];
