"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const note_controllers_1 = require("../controllers/note.controllers");
const authenticated_middleware_1 = require("../middlewares/authenticated.middleware");
const formValidator_middleware_1 = require("../middlewares/formValidator.middleware");
const note_validations_1 = require("../validations/note.validations");
const router = express_1.default.Router();
router.post("/", note_validations_1.createNoteValidation, formValidator_middleware_1.formatValidationErrors, authenticated_middleware_1.isAuthenticated, note_controllers_1.NoteControllers.createNotes);
router.put("/:id", note_validations_1.updateNoteValidation, formValidator_middleware_1.formatValidationErrors, authenticated_middleware_1.isAuthenticated, note_controllers_1.NoteControllers.updateNotes);
router.get("/", authenticated_middleware_1.isAuthenticated, note_controllers_1.NoteControllers.getAllNotes);
router.delete("/:id", note_validations_1.updateNoteValidation, formValidator_middleware_1.formatValidationErrors, authenticated_middleware_1.isAuthenticated, note_controllers_1.NoteControllers.deleteNoteById);
exports.default = router;
