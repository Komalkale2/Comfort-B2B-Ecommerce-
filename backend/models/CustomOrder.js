const mongoose = require('mongoose');
const CustomOrderSchema = new mongoose.Schema({
  name: String,
  email: String,
  description: String,
  imageUrl: String,
  useCloudinary: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: 'pending' }
});
module.exports = mongoose.model('CustomOrder', CustomOrderSchema);
