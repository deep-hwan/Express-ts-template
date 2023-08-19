"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portfolio = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var portfolioSchema = new Schema({
    title: { type: String, require: true },
    subTitle: { type: String, require: true },
    startDate: { type: String, require: true },
    endDate: { type: String, require: true },
    url: { type: String },
    tags: { type: Array, require: true },
    developFields: { type: Array, require: true },
    designFields: { type: Array },
    text: { type: String, require: true },
    images: { type: Array, require: true },
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    versionKey: false,
    timestamps: true,
});
exports.Portfolio = mongoose_1.default.model('portfolio', portfolioSchema);
//# sourceMappingURL=portfolio_schema.js.map