// Importing module
import express, { Request, Response } from "express";
import {userRouter} from "./src/Routes/UserRoute";
import { corsOptions, cors } from "./src/Middlewares/corsMiddleware";

const app = express();
const PORT: Number = 5000;

app.use(express.json())
app.use(cors(corsOptions));
app.use(userRouter);
app.listen(PORT, () => {});

