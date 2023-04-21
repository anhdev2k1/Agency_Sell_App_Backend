import jwt from "jsonwebtoken";
const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const user = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = user;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export const UserVerifyToken = { verifyToken };
