import {
  createNotes,
  deleteNoteById,
  getAllNotes,
  updateNotes,
} from "../services/note.services";
import { RequestHandler } from "../types";

export const NoteControllers: {
  createNotes: RequestHandler;
  updateNotes: RequestHandler;
  getAllNotes: RequestHandler;
  deleteNoteById: RequestHandler;
} = {
  createNotes: async (req, res, next) => {
    try {
      const { title, content } = req.body;

      const userId = req?.currentUser?.id;

      await createNotes({
        title,
        content,
        id: userId,
      });

      res.status(200).json({
        msg: "Notes created successfully",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  },
  updateNotes: async (req, res, next) => {
    try {
      const { title, content } = req.body;

      const id = req?.params?.id;

      await updateNotes({
        title,
        content,
        id,
      });

      res.status(200).json({
        msg: "Notes updated successfully",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  },
  getAllNotes: async (req, res, next) => {
    try {
      const { title, perPage, pageNo } = req.query;

      const id = req?.currentUser?.id;

      const notes = await getAllNotes({
        title: title ? title?.toString() : undefined,
        id,
        perPage: perPage ? perPage?.toString() : undefined,
        pageNo: pageNo ? pageNo?.toString() : undefined,
      });

      res.status(200).json({
        msg: "Notes fetched successfully",
        success: true,
        data: notes,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteNoteById: async (req, res, next) => {
    try {
      const id = req?.params?.id;

      await deleteNoteById(id);

      res.status(200).json({
        msg: "Note deleted successfully",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  },
};
