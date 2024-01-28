import { body, param, ValidationChain } from "express-validator";

export const createNoteValidation: ValidationChain[] = [
  body("title").notEmpty().withMessage("title is required"),
  body("content").notEmpty().withMessage("content is required"),
];
export const updateNoteValidation: ValidationChain[] = [
  param("id")
    .notEmpty()
    .withMessage("id is required")
    .isUUID()
    .withMessage("id is invalid"),
];
