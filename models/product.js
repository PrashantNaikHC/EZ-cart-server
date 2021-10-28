const mongoose = require('mongoose');

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

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;