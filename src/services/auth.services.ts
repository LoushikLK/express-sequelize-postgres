import bcrypt from "bcrypt";
import { NotAcceptable, Unauthorized } from "http-errors";
import { prisma } from "../config";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user)
      throw new Unauthorized(
        "No account is associated with you credentials please register first!"
      );
    if (user.isBlocked)
      throw new NotAcceptable("Account is blocked. Could not logged in");

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch)
      throw new Unauthorized("Incorrect credentials, please try again!");

    return user;
  } catch (error) {
    throw error;
  }
}

export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        name: true,
        email: true,
        id: true,
      },
    });

    if (!user)
      throw new Unauthorized(
        "No account is associated with you credentials please register first!"
      );

    return user;
  } catch (error) {
    throw error;
  }
}
