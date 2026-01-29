const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Create a new order
router.post('/', orderController.createOrder);

// Track order by ID and email/phone
router.post('/track', orderController.trackOrder);

// Get order by tracking ID
router.get('/:orderId', orderController.getOrderById);

// Update order status
router.put('/:orderId/status', orderController.updateOrderStatus);

// Get all orders for a user
router.get('/user/:userId', orderController.getUserOrders);

// Get all orders (admin)
router.get('/', orderController.getAllOrders);

module.exports = router;
