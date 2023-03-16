import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: Number,
      default: 1
    },
  },
  { timestamps: true }
);
const UserModel = mongoose.model("User", UserSchema);
export const User = UserModel;
