"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comments = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var CommentsSchema = new Schema({
    kind: { type: String },
    contentId: { type: String, required: true },
    text: { type: String, required: true },
    userid: { type: Schema.Types.ObjectId, ref: 'portfolioUser' },
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    versionKey: false,
    timestamps: true,
});
exports.Comments = mongoose_1.default.model('portfolioComments', CommentsSchema);
//# sourceMappingURL=commentPortfolio_schema.js.map