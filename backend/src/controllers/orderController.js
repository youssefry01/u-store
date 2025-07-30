const { Order } = require('../models/Order');
const Product = require('../models/Product');

const createOrder = async (req, res) => {
    try {
        const { user, product, code } = req.body;

        if (!user || !product) {
            return res.status(400).json({ message: 'User and Product are required' });
        }

        const newOrder = new Order({
            userId: user.id,
            productId: product.id,
            price: product.price,
            code,
        });

        const savedOrder = await newOrder.save();

        res.status(201).json({ message: 'Order created successfully', order: savedOrder });
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error: error.message });
    }
};

const getOrdersByUserId = async (req, res) => {
    const { userId } = req.params

    if (!userId) {
        return res.status(400).json({ message: 'User ID Required' })
    }

    const orders = await Order.find({ userId: userId });
    if (!orders.length) return res.status(404).json({ message: 'No orders found for this user' });

    res.status(200).json(orders);
};


module.exports = {
    createOrder,
    getOrdersByUserId,
};