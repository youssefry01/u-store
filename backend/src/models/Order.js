const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId : {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    code: { type: String, required: true},
    createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = { Order, orderSchema };