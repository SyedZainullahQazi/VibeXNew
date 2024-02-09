import CATALOGUE_MODEL from "../../models/catalogue.js";

const getCatalogue = async (req, res) => {
  try {
    // Query the database to fetch all catalogue entries
    const catalogues = await CATALOGUE_MODEL.find();

    // Send the fetched catalogue entries as a response
    res.status(200).json(catalogues);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export default getCatalogue;
