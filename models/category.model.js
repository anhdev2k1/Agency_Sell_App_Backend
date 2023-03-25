import mongoose, { Schema } from "mongoose";
const CategorySchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
const CategoryModel = mongoose.model("Category", CategorySchema);
export const Category = CategoryModel;
