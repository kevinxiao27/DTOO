import mongoose from "mongoose";

const outfitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  clothingItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ClothingItem", // Reference to a ClothingItem model (assuming you have one)
    },
  ],
  // Add any other fields relevant to outfits
});

export default mongoose.model("Outfit", outfitSchema);
