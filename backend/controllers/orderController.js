const Order = require('../models/Order');

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const orderData = req.body;

        const order = new Order(orderData);
        await order.save();

        res.status(201).json({
            success: true,
            message: 'Order created successfully',
            data: order
        });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to create order',
            error: error.message
        });
    }
};

// Get order by tracking ID
exports.getOrderById = async (req, res) => {
    try {
        const { orderId } = req.params;

        const order = await Order.findOne({ orderId }).populate('serviceId');

        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }

        res.status(200).json({
            success: true,
            data: order
        });
    } catch (error) {
        console.error('Error fetching order:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch order',
            error: error.message
        });
    }
};

// Track order by ID and email/phone verification
exports.trackOrder = async (req, res) => {
    try {
        const { orderId, email, phone } = req.body;

        if (!orderId || (!email && !phone)) {
            return res.status(400).json({
                success: false,
                message: 'Order ID and either email or phone is required'
            });
        }

        const query = { orderId };
        if (email) {
            query['customerInfo.email'] = email;
        } else if (phone) {
            query['customerInfo.phone'] = phone;
        }

        const order = await Order.findOne(query).populate('serviceId');

        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'Order not found or verification failed'
            });
        }

        res.status(200).json({
            success: true,
            data: order
        });
    } catch (error) {
        console.error('Error tracking order:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to track order',
            error: error.message
        });
    }
};

// Update order status
exports.updateOrderStatus = async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status, note } = req.body;

        const order = await Order.findOne({ orderId });

        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }

        order.status = status;
        order.statusHistory.push({
            status,
            timestamp: new Date(),
            note: note || `Status updated to ${status}`
        });

        await order.save();

        res.status(200).json({
            success: true,
            message: 'Order status updated successfully',
            data: order
        });
    } catch (error) {
        console.error('Error updating order status:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update order status',
            error: error.message
        });
    }
};

// Get all orders for a user
exports.getUserOrders = async (req, res) => {
    try {
        const { userId } = req.params;

        const orders = await Order.find({ customerId: userId })
            .populate('serviceId')
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: orders
        });
    } catch (error) {
        console.error('Error fetching user orders:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch user orders',
            error: error.message
        });
    }
};

// Get all orders (admin)
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate('serviceId')
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: orders
        });
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch orders',
            error: error.message
        });
    }
};
