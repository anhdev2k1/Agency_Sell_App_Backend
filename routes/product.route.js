import express from "express";
import { ProductController } from "../controllers/product.controller.js";
const router = express.Router();

router
  .route("/products")
  .get(ProductController.GetProducts)
  .post(ProductController.CreateProduct)
  .put(ProductController.UpdateProduct);
router
  .route("/product/:id")
  .get(ProductController.GetProductById)
  .delete(ProductController.DeleteProduct);
export const ProductRoute = router;
