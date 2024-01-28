import express from "express";
import { NoteControllers } from "../controllers/note.controllers";
import { isAuthenticated } from "../middlewares/authenticated.middleware";
import { formatValidationErrors } from "../middlewares/formValidator.middleware";
import {
  createNoteValidation,
  updateNoteValidation,
} from "../validations/note.validations";

const router = express.Router();

router.post(
  "/",
  createNoteValidation,
  formatValidationErrors,
  isAuthenticated,
  NoteControllers.createNotes
);
router.put(
  "/:id",
  updateNoteValidation,
  formatValidationErrors,
  isAuthenticated,
  NoteControllers.updateNotes
);
router.get("/", isAuthenticated, NoteControllers.getAllNotes);
router.delete(
  "/:id",
  updateNoteValidation,
  formatValidationErrors,
  isAuthenticated,
  NoteControllers.deleteNoteById
);

export default router;
