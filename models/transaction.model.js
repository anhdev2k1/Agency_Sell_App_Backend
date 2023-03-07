import mongoose, { Schema } from "mongoose";
const TransactionSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    amount: {
      type: String,
      require: true,
    },
    payment: {
      type: Number,
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
    status: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);
const TransactionModel = mongoose.model("Transaction", TransactionSchema);
export const Transaction = TransactionModel;
