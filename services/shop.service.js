import { Shop } from "../models/shop.model.js";
import mongoose from "mongoose";
const CreateShop = async (data) => {
  const newShop = await Shop.create(data);
  return newShop;
};
const GetShop = async () => {
  const getShop = await Shop.find().populate("user");
  return getShop;
};
const GetShopById = async (idShop) => {
  const sid = mongoose.Types.ObjectId(idShop);
  const getShop = await Shop.findOne({ _id: sid }).populate("user");
  return getShop;
};
const UpdateShop = async (idShop) => {
  const sid = mongoose.Types.ObjectId(idShop);
  const update = await Shop.updateOne({_id: sid})
  return update
};
const DeleteShop = async (idShop) => {
  const sid = mongoose.Types.ObjectId(idShop);
  const deleteShop = await Shop.deleteOne({_id: sid})
  return deleteShop
};
export const ShopService = {
  CreateShop,
  GetShop,
  GetShopById,
  UpdateShop,
  DeleteShop,
};
