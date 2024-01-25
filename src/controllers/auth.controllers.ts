import { generateToken } from "../helpers/jwt.helper";
import { getUserById, login, register } from "../services/auth.services";
import { RequestHandler } from "../types";

export const AuthController: {
  login: RequestHandler;
  register: RequestHandler;
  currentUser: RequestHandler;
} = {
  login: async (req, res, next) => {
    try {
      const { username, password } = req.body;

      const user = await login({ username, password });
      const accessToken = generateToken(user);

      res.status(200).json({
        msg: "Login Successful",
        success: true,
        data: { user, accessToken },
      });
    } catch (error) {
      next(error);
    }
  },
  register: async (req, res, next) => {
    try {
      const { password, username, displayName } = req.body;

      await register({ username, password, displayName });

      res.status(200).json({
        msg: "Register Successful",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  },
  currentUser: async (req, res, next) => {
    try {
      //get user data
      let user = await getUserById(req?.currentUser?.id);

      res.status(200).json({
        msg: "User Details",
        success: true,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  },
};
