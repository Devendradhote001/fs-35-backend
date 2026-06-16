const express = require("express");
const mongoose = require("mongoose");

const app = express();

const db = async () => {
  await mongoose.connect(
    "mongodb+srv://fs-35:qwerty12345@cluster0.egyi8xw.mongodb.net/"
  );

  console.log("mongodb connected");
};

db();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "i m running",
  });
});

app.listen(3000, () => {
  console.log("server running port 30000");
});
