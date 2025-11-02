const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    title: String,
    price: Number,
    qty: Number
  }],
  total: Number,
  name: String,
  email: String,
  address: String,
  phone: String,
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: 'pending' }
});
module.exports = mongoose.model('Order', OrderSchema);
