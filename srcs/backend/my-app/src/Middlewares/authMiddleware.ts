import { NextFunction, Request, Response } from "express";

const jwt = require("../Helpers/jwtLogic");
const createError = require("http-errors");

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.cookies.accessToken || req.cookies.accessToken == undefined) {
    return res.json({
      status: false,
      message: "User not Logged",
    });
  }
  const token = req.cookies.accessToken.accessToken;
  await jwt
    .verifyToken(token)
    .then((user: any) => {
      (<any>req).user = user;
      next();
    })
    .catch((e: { message: any }) => {
      res.clearCookie("accessToken");
      return res.json({
        status: false,
        message: e.message,
      });
    });
};

export { authMiddleware };
