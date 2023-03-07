import mongoose from "mongoose";
import { Product } from "../models/product.model.js";
const GetProducts = async () => {
  const getAllProduct = await Product.find({});
  return getAllProduct;
};
const GetProductById = async (idProduct) => {
  const pid = mongoose.Types.ObjectId(idProduct);
  const getProduct = await Product.findOne(pid);
  return getProduct;
};
const CreateProduct = async (data) => {
  const newProduct = await Product.create(data);
  return newProduct;
};
const UpdateProduct = async (data) => {
  const { _id, ...preProduct } = data;
  const pid = mongoose.Types.ObjectId(_id);
  const updateProduct = await Product.findOneAndUpdate(
    { _id: pid },
    preProduct
  );
  return updateProduct;
};
const DeleteProduct = async (idProduct) => {
  const pid = mongoose.Types.ObjectId(idProduct);
  const deleteProduct = await Product.deleteOne({ _id: pid });
  return deleteProduct;
};
export const ProductService = {
  GetProducts,
  GetProductById,
  CreateProduct,
  UpdateProduct,
  DeleteProduct,
};
