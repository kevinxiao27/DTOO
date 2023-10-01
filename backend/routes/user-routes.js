import express from "express";
import { getAllUsers, createUser } from "../controllers/user-controller.js";
import { getAllOutfitsByUserId } from "../controllers/user-controller.js";

const userRouter = express.Router();

// Route to get all users
userRouter.get("/", getAllUsers);
userRouter.post("/", createUser);
userRouter.get("/users/:user_id/outfits", getAllOutfitsByUserId);

export default userRouter;
