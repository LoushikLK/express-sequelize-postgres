import express from "express";
import { UserControllers } from "../controllers/user.controllers";
import { isAuthenticated } from "../middlewares/authenticated.middleware";
import { formatValidationErrors } from "../middlewares/formValidator.middleware";
import { loginValidation } from "../validations/auth.validations";

const router = express.Router();

router.put(
  "/:id",
  loginValidation,
  formatValidationErrors,
  isAuthenticated,
  UserControllers.updateSelfData
);
router.get(
  "/:username",
  loginValidation,
  formatValidationErrors,
  isAuthenticated,
  UserControllers.deleteSelfData
);
router.delete(
  "/:id",
  loginValidation,
  formatValidationErrors,
  isAuthenticated,
  UserControllers.deleteSelfData
);

export default router;
