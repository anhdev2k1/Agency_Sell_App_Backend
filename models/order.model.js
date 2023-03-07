import mongoose, { Schema } from "mongoose";
const OrderSchema = new Schema(
  {
    transaction: {
      type: Schema.Types.ObjectId,
      ref: "Transaction",
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    quantity: {
      type: Number,
    },
    amount: {
      type: Number,
    },
  },
  { timestamps: true }
);
const OrderModel = mongoose.model("Order", OrderSchema);
export const Order = OrderModel;
