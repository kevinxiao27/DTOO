import mongoose from "mongoose";

// Define the User schema
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String, // You can store the path to the profile picture
  },
  eCommerce: {
    type: Boolean, // describes if the user can access retail features or not, false by default for normal users
    required: true,
  },
  outfits: [
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      clothingItems: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "ClothingItem", // Assuming you have a ClothingItem model
        },
      ],
      // Add any other fields relevant to outfits
    },
  ],
  // Add other fields relevant to your fashion app's user model
});

export default mongoose.model("User", userSchema);
