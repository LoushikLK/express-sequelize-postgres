import express from "express";
import { AuthController } from "../controllers/auth.controllers";
import { isAuthenticated } from "../middlewares/authenticated.middleware";
import { formatValidationErrors } from "../middlewares/formValidator.middleware";
import { loginValidation } from "../validations/auth.validations";

const router = express.Router();

router.get("/current-user", isAuthenticated, AuthController.currentUser);

router.post(
  "/login",
  loginValidation,
  formatValidationErrors,
  AuthController.login
);

export default router;
