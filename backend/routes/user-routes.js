const express = require("express");
const router = express.Router();
const UserController = require("./controllers/userController"); // Import your user controller

// Route to get all users
router.get("/users", UserController.getAllUsers);

// Route to search for a user by ID
router.get("/users/:userId", UserController.getUserById);

module.exports = router;
