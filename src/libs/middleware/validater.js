import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";

import { AppUser } from "../schema/appUser_schema.js";
import { config } from "../utils/config";

// 벨리데이터 에러조건
export const validater = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  return res.status(400).json({ message: errors.array() });
};
