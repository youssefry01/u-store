const express = require('express')
const router = express.Router();
const { createOrder, getOrdersByUserId, getOrderById } = require('../controllers/orderController');

router.get('/:userId', getOrdersByUserId);
router.post('/create', createOrder);


module.exports = router