"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteControllers = void 0;
const note_services_1 = require("../services/note.services");
exports.NoteControllers = {
    createNotes: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            const { title, content } = req.body;
            const userId = (_a = req === null || req === void 0 ? void 0 : req.currentUser) === null || _a === void 0 ? void 0 : _a.id;
            yield (0, note_services_1.createNotes)({
                title,
                content,
                id: userId,
            });
            res.status(200).json({
                msg: "Notes created successfully",
                success: true,
            });
        }
        catch (error) {
            next(error);
        }
    }),
    updateNotes: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _b;
        try {
            const { title, content } = req.body;
            const id = (_b = req === null || req === void 0 ? void 0 : req.params) === null || _b === void 0 ? void 0 : _b.id;
            yield (0, note_services_1.updateNotes)({
                title,
                content,
                id,
            });
            res.status(200).json({
                msg: "Notes updated successfully",
                success: true,
            });
        }
        catch (error) {
            next(error);
        }
    }),
    getAllNotes: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _c;
        try {
            const { title, perPage, pageNo } = req.query;
            const id = (_c = req === null || req === void 0 ? void 0 : req.currentUser) === null || _c === void 0 ? void 0 : _c.id;
            const notes = yield (0, note_services_1.getAllNotes)({
                title: title ? title === null || title === void 0 ? void 0 : title.toString() : undefined,
                id,
                perPage: perPage ? perPage === null || perPage === void 0 ? void 0 : perPage.toString() : undefined,
                pageNo: pageNo ? pageNo === null || pageNo === void 0 ? void 0 : pageNo.toString() : undefined,
            });
            res.status(200).json({
                msg: "Notes fetched successfully",
                success: true,
                data: notes,
            });
        }
        catch (error) {
            next(error);
        }
    }),
    deleteNoteById: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _d;
        try {
            const id = (_d = req === null || req === void 0 ? void 0 : req.params) === null || _d === void 0 ? void 0 : _d.id;
            yield (0, note_services_1.deleteNoteById)(id);
            res.status(200).json({
                msg: "Note deleted successfully",
                success: true,
            });
        }
        catch (error) {
            next(error);
        }
    }),
};
