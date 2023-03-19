"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
userRouter.get("/", (req, res) => {
    // res.setHeader("Access-Control-Allow-Origin", "*");
    res.send("Welcome to typescript backend!");
});
userRouter.post("/", (req, res) => {
    // res.setHeader("Access-Control-Allow-Origin", "*");
    res.send("Welcome to typescript backend!");
});
userRouter.put("/", (req, res) => {
    // res.setHeader("Access-Control-Allow-Origin", "*");
    res.send("Welcome to typescript backend!");
});
userRouter.delete("/", (req, res) => {
    // res.setHeader("Access-Control-Allow-Origin", "*");
    res.send("Welcome to typescript backend!");
});
