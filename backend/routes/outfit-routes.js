import express from "express";
const outfitRouter = express.Router();
import {
  createOutfit,
  getAllOutfits,
  getOutfitById,
  updateOutfitById,
  deleteOutfitById,
} from "../controllers/outfit-controller"; // Import the outfit controller

// Route to create a new outfit
outfitRouter.post("/outfits", createOutfit);

// Route to get all outfits
outfitRouter.get("/outfits", getAllOutfits);

// Route to get an outfit by ID
outfitRouter.get("/outfits/:outfitId", getOutfitById);

// Route to update an outfit by ID
outfitRouter.put("/outfits/:outfitId", updateOutfitById);

// Route to delete an outfit by ID
outfitRouter.delete("/outfits/:outfitId", deleteOutfitById);

export default outfitRouter;
