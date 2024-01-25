import { NextFunction, Request, Response } from "express";

export type RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

export interface IAuthUser {
  id: string;
  username: string;
  displayName: string;
}
