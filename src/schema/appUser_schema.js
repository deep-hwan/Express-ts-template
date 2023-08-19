import mongoose from "mongoose";
const Schema = mongoose.Schema;

const appSchema = new Schema(
  {
    email: { type: String }, // 로그인 이메일
    name: { type: String }, // 로그인 이름
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    versionKey: false,
    timestamps: true,
  }
);

export const AppUser = mongoose.model("appUser", appSchema);
