"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = require("../utils/config");
//
/// jwt 토큰 생성
var jwtToken = function (id) {
    return jsonwebtoken_1.default.sign({ id: id }, config_1.config.jwt.secretKey, {
        expiresIn: config_1.config.jwt.expiresInSec,
    });
};
exports.jwtToken = jwtToken;
//# sourceMappingURL=jwt.js.map