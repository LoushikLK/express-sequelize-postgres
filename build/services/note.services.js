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
exports.deleteNoteById = exports.getAllNotes = exports.updateNotes = exports.createNotes = void 0;
const uuid_1 = require("uuid");
const connector_1 = require("../database/connector");
function createNotes({ title, content, id, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = `
      INSERT INTO "Notes" ("id", "userId", "title", "content","createdAt" , "updatedAt")
      VALUES ('${(0, uuid_1.v4)()}', '${id}', '${title}', '${content}' , NOW() , NOW())
      RETURNING *;
    `;
            const note = yield connector_1.sequelizeInstance.query(query, { type: "INSERT" });
            return note;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.createNotes = createNotes;
function updateNotes({ title, content, id, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = `
      UPDATE "Notes" 
      SET "updatedAt" = NOW(), "title" = '${title}', "content" = '${content}'
      WHERE id = '${id}'
    `;
            const note = yield connector_1.sequelizeInstance.query(query, { type: "UPDATE" });
            return note;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.updateNotes = updateNotes;
function getAllNotes({ title, id, perPage = "10", pageNo = "1", }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let where = `WHERE "Notes"."userId" = '${id}'`;
            if (title) {
                where = where + ` AND "Notes"."title" ILIKE '%${title}%'`;
            }
            const query = `
      SELECT "Notes"."id", "title", "content", "Notes"."updatedAt" , "displayName" FROM "Notes" 
      LEFT JOIN "Users" ON "userId" = "Users"."id"
      ${where}
      LIMIT ${perPage} OFFSET ${+perPage * (+pageNo - 1)}
    `;
            const note = yield connector_1.sequelizeInstance.query(query, { type: "UPDATE" });
            return note;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.getAllNotes = getAllNotes;
function deleteNoteById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = `
      DELETE FROM "Notes"
      WHERE id = '${id}'
    `;
            yield connector_1.sequelizeInstance.query(query, { type: "DELETE" });
        }
        catch (error) {
            throw error;
        }
    });
}
exports.deleteNoteById = deleteNoteById;
