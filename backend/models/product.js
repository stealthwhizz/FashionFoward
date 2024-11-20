const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    enum: ['mens', 'womens', 'kids', 'living', 'sports', 'watches'],
    required: true
  },
  stock: {
    type: Number,
    default: 0
  },
  image: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    default: '4.0'
  },
  initialItems: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);