const mongoose = require('mongoose');
const Item = require('./product');

const itemSchema = new mongoose.Schema({
  'item name': {
      type: String,
      required: true
  },
  desc: {
      type: String,
  },
  price: {
      type: Number,
      required: true,
      min: 0
  },
  currency: {
      type: String,
      required: true
  },
  'expiry date': {
      type: String,
      required: true
  },
  quantity: {
      type: String,
      required: true
  }
})

const orderSchema = new mongoose.Schema({
        'order id': {
          type: "Number"
        },
        'userr id': {
          type: "Number"
        },
        'order date': {
          type: "String"
        },
        'order total': {
          type: "Number"
        },
        data: {
          type: [itemSchema]
        }
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;