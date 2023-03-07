import express from "express";
import { ShopController } from "../controllers/shop.controller.js";
const router = express.Router();

router
  .route("/shop")
  .post(ShopController.CreateShop)
  .put(ShopController.UpdateShop);
router.route("/shops").get(ShopController.GetShop);
router
  .route("/shop/:id")
  .get(ShopController.GetShopById)
  .delete(ShopController.DeleteShop);
export const ShopRoute = router;
