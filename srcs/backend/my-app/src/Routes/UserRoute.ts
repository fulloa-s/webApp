import express, { Request, Response } from "express";

const userRouter = express.Router();

userRouter.get("/", (req: Request, res: Response) => {
    // res.setHeader("Access-Control-Allow-Origin", "*");
    res.send("Welcome to typescript backend!");
  });

  userRouter.post("/", (req: Request, res: Response) => {
    // res.setHeader("Access-Control-Allow-Origin", "*");
    res.send("Welcome to typescript backend!");
  });

  userRouter.put("/", (req: Request, res: Response) => {
    // res.setHeader("Access-Control-Allow-Origin", "*");
    res.send("Welcome to typescript backend!");
  });

  userRouter.delete("/", (req: Request, res: Response) => {
    // res.setHeader("Access-Control-Allow-Origin", "*");
    res.send("Welcome to typescript backend!");
  });

  

export {userRouter};
  