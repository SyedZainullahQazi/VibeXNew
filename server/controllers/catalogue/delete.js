import CATALOGUE_MODEL from "../../models/catalogue.js";

const deleteCatalogue = async (req, res) => {
  try {
    const { id } = req.params;
    await CATALOGUE_MODEL.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Catalogue deleted successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

export default deleteCatalogue;
