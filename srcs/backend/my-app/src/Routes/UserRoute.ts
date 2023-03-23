import express, { Request, Response } from "express";
import { authController } from "../Controllers/userController";
import { authMiddleware } from "../Middlewares/authMiddleware";

const userRouter = express.Router();

userRouter.get("/getMe", authMiddleware, (req: Request, res: Response) => {
  authController.getMe(req, res);
});

userRouter.post("/createUser", (req: Request, res: Response) => {
  authController.registerUser(req, res);
});

userRouter.post("/login", (req: Request, res: Response) => {
  authController.loginUser(req, res);
});

userRouter.post("/logout", authMiddleware, (req: Request, res: Response) => {
  authController.logout(req, res);
});

export { userRouter };
