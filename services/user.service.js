import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
const RegisterUser = async (data) => {
  try {
    const { password, _id, role } = data;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    data.password = hashPassword;
    const checkEmail = await User.findOne({ email: data.email });
    if (checkEmail) {
      throw new Error("Email đã được sử dụng!");
    }
    const newUser = await User.create(data);
    const token = jwt.sign({ id: _id, role: role }, process.env.TOKEN_SECRET);
    return { ...newUser._doc, token };
  } catch (error) {
    throw error;
  }
};
const LoginUser = async (data) => {
  try {
    const { email, password } = data;
    const isUser = await User.findOne({ email });
    if (!isUser) {
      throw new Error("Có vẻ Email bạn nhập không đúng!");
    }
    const isMatchPassword = bcrypt.compareSync(password, isUser.password);
    if (!isMatchPassword) {
      throw new Error("Mật khẩu bạn nhập không đúng!");
    }
    const token = jwt.sign(
      { id: isUser._id, role: isUser.role },
      process.env.TOKEN_SECRET
    );
    return { ...isUser._doc, token };
  } catch (error) {
    throw error
  }
};
const getCurrentUser = async (data) => {
  const { id } = data;
  const uid = mongoose.Types.ObjectId(id);
  const isCurrentUser = User.findOne({ _id: uid });
  return isCurrentUser;
};
const GetAllUser = async () => {
  const getAllUser = User.find({});
  return getAllUser;
};
const GetUserById = async (idUser) => {
  const uid = mongoose.Types.ObjectId(idUser);
  const getUser = User.findOne({ _id: uid });
  return getUser;
};
const DeleteUser = async (idUser) => {
  const uid = mongoose.Types.ObjectId(idUser);
  const deleteUser = User.deleteOne({ _id: uid });
  return deleteUser;
};
const UpdateUser = async (data) => {
  const { _id, ...rest } = data;
  const uid = mongoose.Types.ObjectId(_id);
  const updateUser = await User.findOneAndUpdate({ _id: uid }, rest);
  return updateUser;
};
export const UserService = {
  RegisterUser,
  LoginUser,
  getCurrentUser,
  GetAllUser,
  GetUserById,
  DeleteUser,
  UpdateUser,
};
