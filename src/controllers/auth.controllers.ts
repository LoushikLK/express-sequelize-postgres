import { generateToken } from "../helpers/jwt.helper";
import { getUserById, login } from "../services/auth.services";
import { RequestHandler } from "../types";

export const AuthController: {
  login: RequestHandler;
  currentUser: RequestHandler;
} = {
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const user = await login({ email, password });
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
