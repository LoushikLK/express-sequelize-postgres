import { NextFunction, Request, Response } from "express";
import { Unauthorized } from "http-errors";
import { verifyToken } from "../helpers/jwt.helper";
import { IAuthUser } from "../types";

declare global {
  namespace Express {
    interface Request {
      currentUser: IAuthUser;
    }
  }
}

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.headers.authorization)
      throw new Unauthorized("User is not authorized.");

    // extract token from header
    const decoded = await verifyToken(req.headers.authorization);
    req.currentUser = {
      id: decoded?.id,
      email: decoded?.email,
      name: decoded?.name,
    };
    next();
  } catch (error) {
    const err = error as Error;
    res.status(401).json({
      success: false,
      msg: err.message,
    });
  }
};
