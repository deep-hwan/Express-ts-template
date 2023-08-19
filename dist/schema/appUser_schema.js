"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUser = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var appSchema = new Schema({
    email: { type: String },
    name: { type: String }, // 로그인 이름
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    versionKey: false,
    timestamps: true,
});
exports.AppUser = mongoose_1.default.model("appUser", appSchema);
//# sourceMappingURL=appUser_schema.js.map