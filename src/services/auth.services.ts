import { Unauthorized } from "http-errors";
import User from "../schemas/user.model";
import HashService from "./hash.services";

export async function login({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  try {
    const user = await User.findOne({ where: { username }, raw: true });

    if (!user)
      throw new Unauthorized(
        "No account is associated with you credentials please register first!"
      );

    const isPasswordMatch = await new HashService().comparePassword(
      password,
      user.password
    );
    if (!isPasswordMatch)
      throw new Unauthorized("Incorrect credentials, please try again!");

    return user;
  } catch (error) {
    throw error;
  }
}
export async function register({
  username,
  password,
  displayName,
}: {
  username: string;
  password: string;
  displayName: string;
}) {
  try {
    const user = await User.findOne({ where: { username } });

    if (user) throw new Unauthorized("Username already exist please login!");

    const hashPassword = await new HashService().hashPassword(password);

    await User.create(
      {
        username,
        password: hashPassword,
        displayName,
      },
      {
        returning: false,
      }
    );
  } catch (error) {
    console.log({ error });
    throw error;
  }
}

export async function getUserById(id: string) {
  try {
    const user = await User.findByPk(id, {
      attributes: {
        exclude: ["password"],
      },
    });

    return user;
  } catch (error) {
    throw error;
  }
}
