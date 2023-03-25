import mongoose from "mongoose";
import { Product } from "../models/product.model.js";
import { Image } from "../models/image.model.js";
const GetProducts = async () => {
  const getAllProduct = await Product.find({})
    .populate("shop")
    .populate("category_id")
    .populate("image");
  return getAllProduct;
};
const GetProductById = async (idProduct) => {
  const pid = mongoose.Types.ObjectId(idProduct);
  const getProduct = await Product.findOne(pid)
    .populate("shop")
    .populate("category_id")
    .populate("image");
  return getProduct;
};
const CreateProduct = async (data) => {
  const { url, ...rest } = data;
  const image = {
    type: "product",
    url,
  };
  const newImage = await Image.create(image);
  const product = { image: newImage._doc._id, ...rest };
  const newProduct = await Product.create(product);
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
