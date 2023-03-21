"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.signToken = void 0;
const error = require("http-errors");
const jwt = require("jsonwebtoken");
function signToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign({ payload }, process.env.ACCESS_TOKEN_SECRET, {}, (err, token) => {
            if (err) {
                reject(error.InternalServerError());
            }
            resolve(token);
        });
    });
}
exports.signToken = signToken;
function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
            if (err) {
                const message = err.name == "JsonWebTokenError" ? "Not authorized" : err.message;
                return reject(error.Unauthorized(message));
            }
            resolve(payload);
        });
    });
}
exports.verifyToken = verifyToken;
