import express from "express";
import {
  createClothingItem,
  getAllClothingItems,
  getClothingItemById,
  updateClothingItemById,
  deleteClothingItemById,
} from "../controllers/clothing-controller";

const clothingRouter = express.Router();

// Create a new clothing item
clothingRouter.post("/clothing", createClothingItem);

// Get all clothing items
clothingRouter.get("/clothing", getAllClothingItems);

// Get a specific clothing item by ID
clothingRouter.get("/clothing/:itemId", getClothingItemById);

// Update a clothing item by ID
clothingRouter.put("/clothing/:itemId", updateClothingItemById);

// Delete a clothing item by ID
clothingRouter.delete("/clothing/:itemId", deleteClothingItemById);

export default clothingRouter;
