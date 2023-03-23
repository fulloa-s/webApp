import Express, { NextFunction, Request, Response } from "express";
import * as userService from "../Services/UserService";

const error = require("http-errors");
const cookieParser = require("cookie-parser");

class authController {
  static async registerUser(req: Request, res: Response) {
    try {
      const user = await userService.registerUser(req.body);
      res.status(200).json({
        status: true,
        message: "User created successfully",
        data: user.username,
      });
    } catch (e: any) {
      res.status(200).json({
        status: false,
        message: "User not created",
      });
    }
  }
  static async loginUser(req: Request, res: Response) {
    try {
      const data = await userService.login(req.body);
      let { username, accessToken } = data;
      res.cookie("accessToken", { username, accessToken }, { httpOnly: true });
      res.status(200).json({
        status: true,
        message: "Account login successful",
        data: data.username,
      });
    } catch (e: any) {
      res.status(401).json({
        status: false,
        message: "User not Logged",
      });
    }
  }

  static getMe(req: Request, res: Response) {
    res
      .status(200)
      .json({ status: true, username: req.cookies.accessToken.username });
  }

  static logout(req: Request, res: Response) {
    res.clearCookie("accessToken");
    res.status(200).json({ status: true, username: "" });
  }
}

export { authController };
