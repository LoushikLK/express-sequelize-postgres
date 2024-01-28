import express from "express";
import { UserControllers } from "../controllers/user.controllers";
import { isAuthenticated } from "../middlewares/authenticated.middleware";
import { formatValidationErrors } from "../middlewares/formValidator.middleware";
import {
  deleteSelfValidations,
  getUsernameValidation,
  updateValidations,
} from "../validations/user.validations";

const router = express.Router();

router.put(
  "/:id",
  updateValidations,
  formatValidationErrors,
  isAuthenticated,
  UserControllers.updateSelfData
);
router.get(
  "/:username",
  getUsernameValidation,
  formatValidationErrors,
  isAuthenticated,
  UserControllers.checkUsername
);
router.delete(
  "/:id",
  deleteSelfValidations,
  formatValidationErrors,
  isAuthenticated,
  UserControllers.deleteSelfData
);

export default router;
