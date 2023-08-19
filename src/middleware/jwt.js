import jwt from "jsonwebtoken";
import { config } from "../utils/config";

//
/// jwt 토큰 생성
export const jwtToken = (id) => {
  return jwt.sign({ id }, config.jwt.secretKey, {
    expiresIn: config.jwt.expiresInSec,
  });
};
