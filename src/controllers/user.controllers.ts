import {
  deleteSelf,
  findUserName,
  updateSelf,
} from "../services/user.services";
import { RequestHandler } from "../types";

export const UserControllers: {
  updateSelfData: RequestHandler;
  deleteSelfData: RequestHandler;
  checkUsername: RequestHandler;
} = {
  updateSelfData: async (req, res, next) => {
    try {
      const { username, password, displayName } = req.body;

      const userId = req?.params?.id;

      const user = await updateSelf({
        username,
        password,
        displayName,
        id: userId,
      });

      res.status(200).json({
        msg: "User updated successfully",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  },
  checkUsername: async (req, res, next) => {
    try {
      const username = req.params?.username;

      await findUserName(username);

      res.status(200).json({
        msg: "Available username",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteSelfData: async (req, res, next) => {
    try {
      const userId = req?.params?.id;

      await deleteSelf(userId);

      res.status(200).json({
        msg: "User deleted successfully",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  },
};
