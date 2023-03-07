import express from "express";
import DBMongoose from "./configs/index.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { UserRoute } from "./routes/user.route.js";
import { ShopRoute } from "./routes/shop.route.js";
import { ProductRoute } from "./routes/product.route.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
DBMongoose();
app.get("/", (req, res) => {
  res.status(200).send("Hello Văn Anh");
});
app.use(cors());
app.use(express.json())
app.use(cookieParser());
app.use("/api/auth", UserRoute);
app.use("/api",ShopRoute)
app.use("/api",ProductRoute)
app.listen(PORT, () => {
  console.log(`The app is listening on port ${PORT}`);
});
