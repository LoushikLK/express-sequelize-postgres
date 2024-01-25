import { Conflict, Unauthorized } from "http-errors";
import User from "../schemas/user.model";

export async function updateSelf({
  username,
  password,
  displayName,
  id,
}: {
  username?: string;
  password?: string;
  displayName?: string;
  id: string;
}) {
  try {
    const user = await User.update(
      {
        username,
        password,
        displayName,
      },
      {
        where: {
          id,
        },
      }
    );

    if (!user)
      throw new Unauthorized(
        "No account is associated with you credentials please register first!"
      );

    return user;
  } catch (error) {
    throw error;
  }
}
export async function findUserName(username: string) {
  try {
    const user = await User.findOne({ where: { username } });

    if (user) throw new Conflict("Username already exist!");

    return true;
  } catch (error) {
    throw error;
  }
}
export async function deleteSelf(id: string) {
  try {
    const user = await User.destroy({ where: { id } });

    if (!user) throw new Unauthorized("User does not exist");
  } catch (error) {
    throw error;
  }
}
