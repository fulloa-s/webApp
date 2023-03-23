"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jwt = require('../Helpers/jwtLogic');
const createError = require('http-errors');
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.cookies);
    if (!req.cookies.accessToken || req.cookies.accessToken == undefined) {
        return res.json({
            status: false,
            message: "User not Logged",
        });
    }
    const token = req.cookies.accessToken.accessToken;
    yield jwt.verifyToken(token).then((user) => {
        req.user = user;
        next();
    }).catch((e) => {
        res.clearCookie('accessToken');
        return res.json({
            status: false,
            message: e.message,
        });
    });
});
exports.authMiddleware = authMiddleware;
