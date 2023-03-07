import { UserService } from "../services/user.service.js";

const RegisterUser = async (req, res) => {
  try {
    const result = await UserService.RegisterUser(req.body);
    res.status(200).json({
      status: "Register successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
const LoginUser = async (req,res) => {
  try {
    const result = await UserService.LoginUser(req.body);
    res.status(200).json({
      status: "Login successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
        status:"Failed",
        data: error
    });
  }
};

const getCurrentUser = async (req,res) => {
  try {
    const {user} = req
    const result = await UserService.getCurrentUser(user);
    res.status(200).json({
      status: "Login successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
        status:"Failed",
        data: error
    });
  }
};
export const UserController = { LoginUser, RegisterUser, getCurrentUser };
