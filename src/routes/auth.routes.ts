import express from "express";
import { AuthController } from "../controllers/auth.controllers";
import { isAuthenticated } from "../middlewares/authenticated.middleware";
import { formatValidationErrors } from "../middlewares/formValidator.middleware";
import { loginValidation } from "../validations/auth.validations";

const router = express.Router();

router.get("/self", isAuthenticated, AuthController.currentUser);

router.post(
  "/login",
  loginValidation,
  formatValidationErrors,
  AuthController.login
);
router.post(
  "/register",
  loginValidation,
  formatValidationErrors,
  AuthController.register
);

export default router;
