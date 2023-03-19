"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing module
const express_1 = __importDefault(require("express"));
const UserRoute_1 = require("./src/Routes/UserRoute");
const app = (0, express_1.default)();
const PORT = 5000;
app.use(UserRoute_1.userRouter);
app.listen(PORT, () => { });
