import express, { Request, Response } from "express";
import { authController } from "../Controllers/userController";

const userRouter = express.Router();

userRouter.get("/", (req: Request, res: Response) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("Welcome to typescript backend!");
});

userRouter.post("/createUser", (req: Request, res: Response) => {
  console.log("create User called!");
  authController.registerUser(req,res)

});

userRouter.put("/", (req: Request, res: Response) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("Welcome to typescript backend!");
});

userRouter.delete("/", (req: Request, res: Response) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("Welcome to typescript backend!");
});

export { userRouter };
