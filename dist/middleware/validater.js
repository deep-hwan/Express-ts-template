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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isVerify = exports.validater = void 0;
var express_validator_1 = require("express-validator");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var appUser_schema_js_1 = require("../schema/appUser_schema.js");
var config_1 = require("../utils/config");
// 벨리데이터 에러조건
var validater = function (req, res, next) {
    var errors = (0, express_validator_1.validationResult)(req);
    if (errors.isEmpty()) {
        return next();
    }
    return res.status(400).json({ message: errors.array() });
};
exports.validater = validater;
//
// 나인지 검증
function isVerify(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var authHeader, token;
        var _this = this;
        return __generator(this, function (_a) {
            authHeader = req.headers.authorization;
            if (!(authHeader && authHeader.startsWith("Bearer "))) {
                return [2 /*return*/, res
                        .status(401)
                        .json({ message: "Authentication Error _ 존재하지 않음" })];
            }
            token = authHeader.split(" ")[1];
            jsonwebtoken_1.default.verify(token, config_1.config.jwt.secretKey, function (error, decoded) { return __awaiter(_this, void 0, void 0, function () {
                var user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (error) {
                                return [2 /*return*/, res
                                        .status(401)
                                        .json({ message: "Authentication Error _ jwt 에러" })];
                            }
                            return [4 /*yield*/, appUser_schema_js_1.AppUser.findById(decoded.id)];
                        case 1:
                            user = _a.sent();
                            if (!user) {
                                return [2 /*return*/, res
                                        .status(401)
                                        .json({ message: "Authentication Error_사용자 찾지못함" })];
                            }
                            req.uid = user.id; // req.customData
                            req.userEmail = user.email;
                            next();
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    });
}
exports.isVerify = isVerify;
// 두개의 토큰을 비교하여 callback 한다.
// 토큰의 검증이 완료된다면
// decoded data 인  req.uid = user.id 을 추가한다.
//# sourceMappingURL=validater.js.map