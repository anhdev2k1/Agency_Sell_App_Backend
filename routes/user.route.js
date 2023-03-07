import express from "express";
import { UserController } from "../controllers/users.controller.js";
import { UserVerifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

router.route("/user/login").post(UserController.LoginUser);
router.route("/user/register").post(UserController.RegisterUser);
router.route("/currentUser").get(UserVerifyToken.verifyToken,UserController.getCurrentUser)


export const UserRoute = router;
