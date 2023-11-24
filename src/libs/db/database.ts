import mongoose, { Schema } from "mongoose";
import { config } from "../utils/config";

//
/// _id => id
export function useVirtualId(schema: Schema): void {
  schema.virtual("id").get(function (this: any) {
    return this._id.toHexString();
  });
  schema.set("toJSON", { virtuals: true });
  schema.set("toObject", { virtuals: true });
}

//
/// MongoDB 연결
export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(config.db);
    mongoose.Promise = global.Promise;
    console.log("MongoDB 연결 완료");
  } catch (err: any) {
    console.error("MongoDB 연결 에러:", err.message);
    process.exit(1);
  }
};
