import mongoose from 'mongoose';

const catalogueSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  space: {
    type: String,
    required: true,
  },
  images: {
    type: [String], // Assuming 'images' is an array of image URLs
    required: true,
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Catalogue = mongoose.model('Catalogue', catalogueSchema);

export default Catalogue;
