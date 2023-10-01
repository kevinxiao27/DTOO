import ClothingItem from "../models/Clothing";
// Controller function to create a new clothing item
export const createClothingItem = async (req, res, next) => {
  const { name, category, color, size, brand, price } = req.body;

  // Create a new ClothingItem instance
  const newClothingItem = new ClothingItem({
    name,
    category,
    color,
    size,
    brand,
    price,
  });

  try {
    // Save the new clothing item to the database
    await newClothingItem.save();
    res.status(201).json({
      message: "Clothing item created successfully",
      clothingItem: newClothingItem,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to create clothing item", error: err.message });
  }
};

// Controller function to get all clothing items
exports.getAllClothingItems = async (req, res, next) => {
  try {
    const clothingItems = await ClothingItem.find();
    res.status(200).json({ clothingItems });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving clothing items", error: err.message });
  }
};

// Controller function to get a clothing item by ID
export const getClothingItemById = async (req, res, next) => {
  const { clothingItemId } = req.params;

  try {
    const clothingItem = await ClothingItem.findById(clothingItemId);

    if (!clothingItem) {
      return res.status(404).json({ message: "Clothing item not found" });
    }

    res.status(200).json({ clothingItem });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving clothing item", error: err.message });
  }
};

// Controller function to update a clothing item by ID
exports.updateClothingItemById = async (req, res, next) => {
  const { clothingItemId } = req.params;
  const updatedClothingItemData = req.body;

  try {
    const updatedClothingItem = await ClothingItem.findByIdAndUpdate(
      clothingItemId,
      updatedClothingItemData,
      {
        new: true,
      }
    );

    if (!updatedClothingItem) {
      return res.status(404).json({ message: "Clothing item not found" });
    }

    res.status(200).json({
      message: "Clothing item updated successfully",
      clothingItem: updatedClothingItem,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating clothing item", error: err.message });
  }
};

// Controller function to delete a clothing item by ID
export const deleteClothingItemById = async (req, res, next) => {
  const { clothingItemId } = req.params;

  try {
    const deletedClothingItem = await ClothingItem.findByIdAndRemove(
      clothingItemId
    );

    if (!deletedClothingItem) {
      return res.status(404).json({ message: "Clothing item not found" });
    }

    res.status(200).json({ message: "Clothing item deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting clothing item", error: err.message });
  }
};
