"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    jwt: {
        secretKey: process.env.JWT_SECRET,
        expiresInSec: 86400,
    },
    bcrypt: {
        saltRounds: 12,
    },
    serverPort: 8080,
    db: process.env.DB_HOST || "DB_HOST",
};
//# sourceMappingURL=config.js.map