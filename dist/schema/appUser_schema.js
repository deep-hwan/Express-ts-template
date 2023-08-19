"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioUser = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var meSchema = new Schema({
    email: { type: String },
    name: { type: String }, // 로그인 이름
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    versionKey: false,
    timestamps: true,
});
exports.PortfolioUser = mongoose_1.default.model('portfolioUser', meSchema);
//# sourceMappingURL=appUser_schema.js.map