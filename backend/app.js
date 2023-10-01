import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const password = process.env.MONGODB_PASSWORD;

mongoose
  .connect(
    `mongodb+srv://admin:${password}@cluster0.qdkpkrs.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(5023, () => console.log("Connected to Database and Server"))
  )
  .catch((e) => console.log(e));
