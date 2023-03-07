import jwt from "jsonwebtoken";
const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json("Wrong credentials!");
    }
    req.user = user;
  });
  next();
};

export const UserVerifyToken = { verifyToken };
