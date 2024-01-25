import { body, ValidationChain } from "express-validator";

export const loginValidation: ValidationChain[] = [
  body("username").notEmpty().withMessage("Username is required"),
  body("password")
    .notEmpty()
    .withMessage("Please enter a password with 6 or more characters")
    .isLength({ min: 6 }),
];
