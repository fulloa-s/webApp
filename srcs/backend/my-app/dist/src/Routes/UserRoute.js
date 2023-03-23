"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const userController_1 = require("../Controllers/userController");
const authMiddleware_1 = require("../Middlewares/authMiddleware");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
userRouter.get("/getMe", authMiddleware_1.authMiddleware, (req, res) => {
    userController_1.authController.getMe(req, res);
});
userRouter.post("/createUser", (req, res) => {
    userController_1.authController.registerUser(req, res);
});
userRouter.post("/login", (req, res) => {
    userController_1.authController.loginUser(req, res);
});
userRouter.post("/logout", authMiddleware_1.authMiddleware, (req, res) => {
    userController_1.authController.logout(req, res);
});
