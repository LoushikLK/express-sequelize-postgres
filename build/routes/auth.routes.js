"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controllers_1 = require("../controllers/auth.controllers");
const authenticated_middleware_1 = require("../middlewares/authenticated.middleware");
const formValidator_middleware_1 = require("../middlewares/formValidator.middleware");
const auth_validations_1 = require("../validations/auth.validations");
const router = express_1.default.Router();
router.get("/self", authenticated_middleware_1.isAuthenticated, auth_controllers_1.AuthController.currentUser);
router.post("/login", auth_validations_1.loginValidation, formValidator_middleware_1.formatValidationErrors, auth_controllers_1.AuthController.login);
router.post("/register", auth_validations_1.loginValidation, formValidator_middleware_1.formatValidationErrors, auth_controllers_1.AuthController.register);
exports.default = router;
