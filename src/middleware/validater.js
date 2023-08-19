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

//
// 나인지 검증
export async function isVerify(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!(authHeader && authHeader.startsWith("Bearer "))) {
    return res
      .status(401)
      .json({ message: "Authentication Error _ 존재하지 않음" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, config.jwt.secretKey, async (error, decoded) => {
    if (error) {
      return res
        .status(401)
        .json({ message: "Authentication Error _ jwt 에러" });
    }

    const user = await AppUser.findById(decoded.id);

    if (!user) {
      return res
        .status(401)
        .json({ message: "Authentication Error_사용자 찾지못함" });
    }
    req.uid = user.id; // req.customData
    req.userEmail = user.email;
    next();
  });
}

// 두개의 토큰을 비교하여 callback 한다.
// 토큰의 검증이 완료된다면
// decoded data 인  req.uid = user.id 을 추가한다.
