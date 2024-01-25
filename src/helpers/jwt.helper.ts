import { InternalServerError } from "http-errors";
import jwt, { SignOptions } from "jsonwebtoken";

export const generateToken = (
  payload: string | object,
  options?: SignOptions
) => {
  const jwtSecret = process.env.JWT_SECRET as string;

  if (!jwtSecret) throw new InternalServerError("JWT secret is not found.");

  return jwt.sign(payload, jwtSecret, {
    expiresIn: options?.expiresIn || "1d",
  });
};
export const verifyToken = (token: string) => {
  const jwtSecret = process.env.JWT_SECRET as string;

  if (!jwtSecret) throw new InternalServerError("JWT secret is not found.");

  return jwt.verify(token?.split(" ")[1], jwtSecret);
};
