import jwt, { JwtPayload } from "jsonwebtoken";
import { config } from "../utils/config"; // 경로는 실제 프로젝트 구조에 맞게 조정해주세요.
import { AppUser } from "../schema/appUser_schema.js";

//
/// jwt 토큰 생성
export const jwtToken = (id: string): string => {
  const payload: { id: string } = { id };
  return jwt.sign(payload, config.jwt.secretKey, {
    expiresIn: config.jwt.expiresInSec,
  });
};

//
// 나인지 검증
export async function useVerify(req: any, res: any, next: any) {
  const authHeader = req.headers.authorization;

  if (!(authHeader && authHeader.startsWith("Bearer "))) {
    return res
      .status(401)
      .json({ message: "Authentication Error _ 존재하지 않음" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(
    token,
    config.jwt.secretKey,
    async (error, decoded: JwtPayload | undefined) => {
      if (error) {
        return res
          .status(401)
          .json({ message: "Authentication Error _ jwt 에러" });
      }

      if (!decoded || !decoded.id) {
        return res.status(401).json({ message: "Invalid token" });
      }

      const user = await AppUser.findById(decoded.id);

      if (!user) {
        return res
          .status(401)
          .json({ message: "Authentication Error_사용자 찾지못함" });
      }

      req.uid = user.id;
      req.userEmail = user.email;
      next();
    }
  );
}
// 두개의 토큰을 비교하여 callback 한다.
// 토큰의 검증이 완료된다면
// decoded data 인  req.uid = user.id 을 추가한다.
