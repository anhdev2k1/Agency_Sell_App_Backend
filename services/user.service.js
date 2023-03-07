import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
const RegisterUser = async (data) => {
  const { password, _id, role } = data;
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  data.password = hashPassword;
  const newUser = await User.create(data);
  const token = jwt.sign(
    { id: _id, role: role },
    process.env.TOKEN_SECRET
  );
  return {...newUser._doc, token};
};
const LoginUser = async (data) => {
  const { email, password } = data;
  const isUser = await User.findOne({ email });
  if (!isUser) {
    throw "Email not found";
  }
  const isMatchPassword = bcrypt.compare(password, isUser.password);
  if (!isMatchPassword) {
    throw new Error("Password is not correct!!");
  }
  const token = jwt.sign(
    { id: isUser._id, role: isUser.role },
    process.env.TOKEN_SECRET
  );
  return {...isUser._doc, token};
};
const getCurrentUser = async (data) => {
  const {id} = data
  const uid = mongoose.Types.ObjectId(id);
  const isCurrentUser = User.findOne({_id: uid})
  return isCurrentUser
};
export const UserService = { RegisterUser, LoginUser, getCurrentUser };
