import mongoose from "mongoose";
import { Cart } from "../models/cart.model.js";
import { Product } from "../models/product.model.js";
const getCart = async () => {
  try {
    const result = await Cart.find({})
      .populate("product_id")
      .populate("user_id");
    return result;
  } catch (error) {
    throw error;
  }
};
const getCartByUser = async (data) => {
  try {
    const { id } = data;
    const uid = mongoose.Types.ObjectId(id);
    const result = await Cart.find({ user_id: uid })
      .populate({
        path: "product_id",
        populate: [{ path: "image" }, { path: "shop" }],
      })
      .populate("user_id");
    return result;
  } catch (error) {
    throw error;
  }
};
const addToCart = async (data) => {
  try {
    const pid = mongoose.Types.ObjectId(data.productId);
    const uid = mongoose.Types.ObjectId(data.userId);
    const listProductCart = await Cart.find({})
      .populate("product_id")
      .populate("user_id");

    const productCart = listProductCart.find((item) => {
      return (
        JSON.stringify(item.product_id._id) === JSON.stringify(pid) &&
        JSON.stringify(item.user_id._id) === JSON.stringify(uid)
      );
    });
    if (productCart) {
      const cartItem = await Cart.findOne({ _id: productCart._id });
      await Cart.findOneAndUpdate(
        { _id: productCart._id },
        { $set: { quantity_p: cartItem.quantity_p + 1 } }
      );
      return productCart;
    } else {
      await Product.findOne({ _id: pid });
      const CartItem = await Cart.create({
        product_id: data.productId,
        user_id: data.userId,
        quantity_p: 1,
      });
      return CartItem;
    }
  } catch (error) {
    throw error;
  }
};
const updateCart = async (data) => {
  try {
    const writeUpdates = data.map((item) => {
      const pid = mongoose.Types.ObjectId(item._id);
      return {
        updateOne: {
          filter: { product_id: pid },
          update: { quantity_p: item.quantity_p },
        },
      };
    });
    const result = await Cart.bulkWrite(writeUpdates);
    return result;
  } catch (error) {
    throw error;
  }
};
const deleteCart = async (idProduct) => {
  try {
    const pid = mongoose.Types.ObjectId(idProduct);
    const result = await Cart.deleteOne({ product_id: pid });
    return result;
  } catch (error) {
    throw error;
  }
};
export const CartService = {
  getCart,
  addToCart,
  getCartByUser,
  updateCart,
  deleteCart,
};
