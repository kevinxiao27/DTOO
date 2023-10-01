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
  // Add other fields relevant to your fashion app's user model
});

export default mongoose.model("User", userSchema);
