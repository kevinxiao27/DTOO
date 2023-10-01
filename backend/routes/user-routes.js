import express from "express";
import { getAllUsers, createUser } from "../controllers/user-controller.js";

const userRouter = express.Router();

// Route to get all users
userRouter.get("/", getAllUsers);
userRouter.post("/", createUser);

export default userRouter;
