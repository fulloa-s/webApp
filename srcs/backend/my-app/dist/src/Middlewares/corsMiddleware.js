"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = exports.cors = void 0;
let corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    credentials: true
};
exports.corsOptions = corsOptions;
let cors = require('cors');
exports.cors = cors;
