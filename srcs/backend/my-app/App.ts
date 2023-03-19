// Importing module
import express, { Request, Response } from "express";
import {userRouter} from "./src/Routes/UserRoute"

const app = express();
const PORT: Number = 5000;

app.use(userRouter);
app.listen(PORT, () => {});

