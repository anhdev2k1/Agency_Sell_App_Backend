import express from "express";
import DBMongoose from "./configs/index.js";
const app = express();
const port = 5000;
app.get("/", (req, res) => {
  res.send("Hello World! 123");
});
DBMongoose();
app.listen(port, () => {
  console.log(`The app is listening on port ${port}`);
});
