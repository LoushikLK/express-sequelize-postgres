import { body, ValidationChain } from "express-validator";

export const loginValidation: ValidationChain[] = [
  body("email")
    .notEmpty()
    .withMessage("Email is required*")
    .isEmail()
    .withMessage("Provide a valid email."),
  body("password")
    .notEmpty()
    .withMessage("Please enter a password with 6 or more characters")
    .isLength({ min: 6 }),
];
