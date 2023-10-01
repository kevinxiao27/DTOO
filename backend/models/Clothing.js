import mongoose from "mongoose";

const clothingItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  color: {
    type: String,
    trim: true,
  },
  brand: {
    type: String,
    trim: true,
  },
  // Add any other fields relevant to clothing items
});

export default mongoose.model("ClothingItem", clothingItemSchema);
