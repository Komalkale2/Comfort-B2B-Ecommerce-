const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: String,
  images: [String],
  createdAt: { type: Date, default: Date.now },
  stock: { type: Number, default: 10 }
});
module.exports = mongoose.model('Product', ProductSchema);
