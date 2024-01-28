import { v4 as uuidv4 } from "uuid";
import { sequelizeInstance } from "../database/connector";

export async function createNotes({
  title,
  content,
  id,
}: {
  title?: string;
  content?: string;
  id: string;
}) {
  try {
    const query = `
      INSERT INTO "Notes" ("id", "userId", "title", "content","createdAt" , "updatedAt")
      VALUES ('${uuidv4()}', '${id}', '${title}', '${content}' , NOW() , NOW())
      RETURNING *;
    `;

    const note = await sequelizeInstance.query(query, { type: "INSERT" });

    return note;
  } catch (error) {
    throw error;
  }
}
export async function updateNotes({
  title,
  content,
  id,
}: {
  title?: string;
  content?: string;
  id: string;
}) {
  try {
    const query = `
      UPDATE "Notes" 
      SET "updatedAt" = NOW(), "title" = '${title}', "content" = '${content}'
      WHERE id = '${id}'
    `;

    const note = await sequelizeInstance.query(query, { type: "UPDATE" });
    return note;
  } catch (error) {
    throw error;
  }
}
export async function getAllNotes({
  title,
  id,
  perPage = "10",
  pageNo = "1",
}: {
  title?: string;
  id: string;
  perPage?: string;
  pageNo?: string;
}) {
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

    const note = await sequelizeInstance.query(query, { type: "UPDATE" });
    return note;
  } catch (error) {
    throw error;
  }
}
export async function deleteNoteById(id: string) {
  try {
    const query = `
      DELETE FROM "Notes"
      WHERE id = '${id}'
    `;

    await sequelizeInstance.query(query, { type: "DELETE" });
  } catch (error) {
    throw error;
  }
}
