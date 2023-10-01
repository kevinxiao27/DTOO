import express from "express";
import getAllUsers from "../controllers/user-controller.js";

const userRouter = express.Router();

// Route to get all users
userRouter.get("/", getAllUsers);

export default userRouter;
