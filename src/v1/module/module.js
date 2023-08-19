import { AppUser } from "../../schema/appUser_schema.js";

//
/// 로그인
//
export async function signIn(req, res, next) {
  const { email, name } = req.body;

  const foundUser = await AppUser.findOne({
    email: email,
  });

  if (foundUser) {
    const token = jwtToken(foundUser.id);
    res.status(200).json({
      email,
      name,
      token,
    });
  } else {
    const createdUser = await new AppUser({
      email,
      name,
    })
      .save()
      .then((data) => data.id);

    const token = jwtToken(createdUser);
    res.status(201).json({ email, name, token });
  }
}

console.log("npm run dev");
