"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.History = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var historySchema = new Schema({
    title: { type: String },
    date: { type: String },
    tags: { type: Array },
    editor: { type: String },
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    versionKey: false,
    timestamps: true,
});
exports.History = mongoose_1.default.model('history', historySchema);
//# sourceMappingURL=history_schema.js.map