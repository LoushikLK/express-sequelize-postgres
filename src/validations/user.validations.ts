import { body, param, ValidationChain } from "express-validator";

export const updateValidations: ValidationChain[] = [
  param("id")
    .notEmpty()
    .withMessage("Id is required")
    .isUUID()
    .withMessage("Id must be a valid Id"),
  body("password")
    .optional()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];
export const deleteSelfValidations: ValidationChain[] = [
  param("id")
    .notEmpty()
    .withMessage("Id is required")
    .isUUID()
    .withMessage("Id must be a valid Id"),
];
export const getUsernameValidation: ValidationChain[] = [
  param("username").notEmpty().withMessage("username is required"),
];
