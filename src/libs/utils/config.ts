import dotenv from "dotenv";
dotenv.config();

export const config = {
  jwt: {
    secretKey: process.env.JWT_SECRET,
    expiresInSec: 86400,
  },

  bcrypt: {
    saltRounds: 12,
  },

  serverPort: 8080,

  db: process.env.DB_HOST || "DB_HOST",
};
