import mongoose from "mongoose";
import { config } from "../utils/config";

// export async function connectDB() {
//   try {
//     await mongoose.connect(config.db, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     console.log('mongodb 연결완료')
//   } catch (error) {
//     console.log('mongoDB 연결에러', error)s
//   }
// }

//_id => id
export function useVirtualId(userSchema) {
  userSchema.virtual("id").get(function () {
    return this._id.toString();
  });
  userSchema.set("toJSON", { virtuals: true });
  userSchema.set("toObject", { virtuals: true });
}

//
////
export const connectDB = async () => {
  try {
    await mongoose.connect(config.db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.Promise = global.Promise;
    console.log("MongoDB 연결 완료");
  } catch (err) {
    console.error("MongoDB 연결 에러:", err.message);
    process.exit(1);
  }
};
