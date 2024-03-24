"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controllers_1 = require("../controllers/user.controllers");
const authenticated_middleware_1 = require("../middlewares/authenticated.middleware");
const formValidator_middleware_1 = require("../middlewares/formValidator.middleware");
const user_validations_1 = require("../validations/user.validations");
const router = express_1.default.Router();
router.put("/:id", user_validations_1.updateValidations, formValidator_middleware_1.formatValidationErrors, authenticated_middleware_1.isAuthenticated, user_controllers_1.UserControllers.updateSelfData);
router.get("/:username", user_validations_1.getUsernameValidation, formValidator_middleware_1.formatValidationErrors, authenticated_middleware_1.isAuthenticated, user_controllers_1.UserControllers.checkUsername);
router.delete("/:id", user_validations_1.deleteSelfValidations, formValidator_middleware_1.formatValidationErrors, authenticated_middleware_1.isAuthenticated, user_controllers_1.UserControllers.deleteSelfData);
exports.default = router;
