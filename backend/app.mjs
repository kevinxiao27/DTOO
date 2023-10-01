import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js"; // Replace with your user routes module

dotenv.config();
const app = express();
const port = process.env.PORT || 5243;

app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.qdkpkrs.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(5243, () =>
      console.log(`Connected to Database and Server is active`)
    )
  )
  .catch((e) => console.log(e));
