import Outfit from "../models/Outfit"; // Import the Outfit model

// Controller function to create a new outfit
export const createOutfit = async (req, res, next) => {
  const { name, description, clothingItems } = req.body;

  // Create a new Outfit instance
  const newOutfit = new Outfit({
    name,
    description,
    clothingItems,
  });

  try {
    // Save the new outfit to the database
    await newOutfit.save();
    res
      .status(201)
      .json({ message: "Outfit created successfully", outfit: newOutfit });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to create outfit", error: err.message });
  }
};

// Controller function to get all outfits
export const getAllOutfits = async (req, res, next) => {
  try {
    const outfits = await Outfit.find();
    res.status(200).json({ outfits });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving outfits", error: err.message });
  }
};

// Controller function to get an outfit by ID
export const getOutfitById = async (req, res, next) => {
  const { outfitId } = req.params;

  try {
    const outfit = await Outfit.findById(outfitId);

    if (!outfit) {
      return res.status(404).json({ message: "Outfit not found" });
    }

    res.status(200).json({ outfit });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving outfit", error: err.message });
  }
};

// Controller function to update an outfit by ID
export const updateOutfitById = async (req, res, next) => {
  const { outfitId } = req.params;
  const updatedOutfitData = req.body;

  try {
    const updatedOutfit = await Outfit.findByIdAndUpdate(
      outfitId,
      updatedOutfitData,
      {
        new: true,
      }
    );

    if (!updatedOutfit) {
      return res.status(404).json({ message: "Outfit not found" });
    }

    res
      .status(200)
      .json({ message: "Outfit updated successfully", outfit: updatedOutfit });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating outfit", error: err.message });
  }
};

// Controller function to delete an outfit by ID
export const deleteOutfitById = async (req, res, next) => {
  const { outfitId } = req.params;

  try {
    const deletedOutfit = await Outfit.findByIdAndRemove(outfitId);

    if (!deletedOutfit) {
      return res.status(404).json({ message: "Outfit not found" });
    }

    res.status(200).json({ message: "Outfit deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting outfit", error: err.message });
  }
};
